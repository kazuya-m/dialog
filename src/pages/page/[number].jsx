import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { getPostsPerPage } from 'src/lib/microcms/client'

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
          <Intro headline="" />
          <PostsFeed posts={posts} />
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
    revalidate: 60 * 5,
  }
}

export const getStaticPaths = () => {
  return { paths: [], fallback: 'blocking' }
}

export default PostPage
