import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PostBody } from 'src/components/post/Post-body'
import { PostHeader } from 'src/components/post/Post-header'
import { Layout } from 'src/components/separate/Layout'
import { BackToHome } from 'src/components/shared/BackToHome.tsx'
import { Container } from 'src/components/shared/Container'
import { SectionSeparator } from 'src/components/utils/separator/Section-separator'
import { getPostById } from 'src/lib/microcms/api'

export const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <article className="mt-10 max-w-2xl mx-auto">
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
          <PostBody content={post.body} />
          <SectionSeparator />
        </article>
        <BackToHome />
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
