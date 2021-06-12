import type { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useEffect } from 'react'
import { PostFeedMini } from 'src/components/feed/PostFeedMini'
import { PostBody } from 'src/components/post/PostBody'
import { PostHeader } from 'src/components/post/PostHeader'
import { Reprinting } from 'src/components/post/Reprinting'
import { SNSShare } from 'src/components/post/SNSShare'
import { Layout } from 'src/components/separate/Layout'
import { BackToHome } from 'src/components/shared/BackToHome'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { SectionSeparator } from 'src/components/utils/separator/SectionSeparator'
import { getPostById } from 'src/lib/microcms/client'
import { PostDetail } from 'src/models/posts'

type Props = {
  post: PostDetail
}

export const Post: VFC<Props> = ({ post }) => {
  const router = useRouter()
  // Twitter埋め込みスクリプトの反映
  useEffect(() => {
    const s = document.createElement('script')
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    s.setAttribute('async', 'true')
    document.head.appendChild(s)
  }, [])
  // 404ハンドリング
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }

  const meta = {
    title: post.title,
    cardImage: post.thumbnail?.url ?? post.category.thumbnail.url,
  }

  return (
    <Layout uniqueMeta={meta}>
      <Container>
        <article className="max-w-2xl mx-auto mt-10 mb-6">
          <PostHeader
            title={post.title}
            thumbnail={post.thumbnail ?? post.category.thumbnail}
            date={post.publishedAt}
            author={post.author}
            category={post.category}
          />
          <SectionSeparator />
          <div className="mt-6">
            <SNSShare title={post.title} accountName={post.author.accountName} withMessage={false} />
          </div>
          {post?.author?.url && post?.author.resource && (
            <div className="mt-6 mb-12">
              <Reprinting
                name={post.author.name}
                accountName={post.author.accountName}
                url={post.author.url}
                resource={post.author.resource}
              />
            </div>
          )}
          <PostBody content={post.body} />
          <SectionSeparator />
        </article>
        <section className="max-w-2xl mx-auto">
          <div className="mt-6">
            <SNSShare title={post.title} accountName={post.author.accountName} />
          </div>
          {post.relatedArticles?.length ? (
            <div className="mt-2 mb-4">
              <Intro headline="RELATED ARTICLES" />
              <PostFeedMini posts={post.relatedArticles} />
            </div>
          ) : null}
          <div className="flex justify-center mb-6">
            <BackToHome />
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  const id = params?.id
  const postData = await getPostById(id)
  return {
    props: {
      post: postData,
    },
    revalidate: 60 * 5,
  }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default Post
