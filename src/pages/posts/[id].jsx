import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PostBody } from 'src/components/post/PostBody'
import { PostHeader } from 'src/components/post/PostHeader'
import { SNSShare } from 'src/components/post/SNSShare'
import { Layout } from 'src/components/separate/Layout'
import { BackToHome } from 'src/components/shared/BackToHome.tsx'
import { Container } from 'src/components/shared/Container'
import { SectionSeparator } from 'src/components/utils/separator/SectionSeparator'
import { getPostById } from 'src/lib/microcms/api'

export const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <article className="max-w-2xl mx-auto mt-10 mb-6">
          <Head>
            <title>{post.title}</title>
            {/* <meta property="og:image" content={post.ogImage.url} /> */}
          </Head>
          <PostHeader
            title={post.title}
            thumbnail={post.thumbnail}
            date={post.publishedAt}
            author={post.author}
            category={post.category}
          />
          <SectionSeparator />
          <div className="mt-6">
            <SNSShare title={post.title} accountName={post.author.accountName} />
          </div>
          <PostBody content={post.body} />
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

  const postData = await getPostById(id)

  return {
    props: {
      post: postData,
    },
    revalidate: 60 * 5,
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default Post
