import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LatestPosts } from 'src/components/feed/Latest-posts'
import { Intro } from 'src/components/intro'
import { Pagination } from 'src/components/Pagination'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { getPostsPerPage } from 'src/lib/microcms/api'

export const PostPage = ({ posts, totalCount }) => {
  const router = useRouter()
  if (!router.isFallback && !posts[0]) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Layout>
        <Head>
          <title>DIALOG</title>
        </Head>
        <Container>
          <Intro />
          <LatestPosts posts={posts} />
          <Pagination path="page" totalCount={totalCount} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async (context) => {
  const { number } = context.params
  const data = await getPostsPerPage(number)

  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount,
    },
    revalidate: 60 * 60,
  }
}

export const getStaticPaths = () => {
  return { paths: [], fallback: 'blocking' }
}

export default PostPage
