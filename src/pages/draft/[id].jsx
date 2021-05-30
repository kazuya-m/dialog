import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PostBody } from 'src/components/post/PostBody'
import { PostHeader } from 'src/components/post/PostHeader'
import { Reprinting } from 'src/components/post/Reprinting'
import { SNSShare } from 'src/components/post/SNSShare'
import { Layout } from 'src/components/separate/Layout'
import { BackToHome } from 'src/components/shared/BackToHome.tsx'
import { Container } from 'src/components/shared/Container'
import { SectionSeparator } from 'src/components/utils/separator/SectionSeparator'
import { getDraftPostById } from 'src/lib/microcms/client'

export const Draft = ({ post }) => {
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
            date="2020-04-23T14:32:38.163Z"
            author={post.author}
            category={post.category}
          />
          <SectionSeparator />
          <div className="mt-6">
            <SNSShare title={post.title} accountName={post.author.accountName} withMessage={false} />
          </div>
          {post.author.id !== 'maybe_km' && (
            <div className="mt-6 mb-12">
              <Reprinting author={post.author} />
            </div>
          )}
          <PostBody content={post.body} />
          <SectionSeparator />
        </article>
        <div className="mt-8 mb-2">
          <SNSShare title={post.title} accountName={post.author.accountName} />
        </div>
        <div className="flex justify-center mb-6">
          <BackToHome />
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const { draftKey } = context.previewData
  const postData = await getDraftPostById(id, draftKey)
  return {
    props: {
      post: postData,
    },
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default Draft
