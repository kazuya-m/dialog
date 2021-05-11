import Head from 'next/head'
import { LatestPosts } from 'src/components/feed/Latest-posts'
import { Intro } from 'src/components/intro'
import { Pagination } from 'src/components/Pagination'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { getPostsPerPage } from 'src/lib/microcms/api'

export const Index = ({ posts, totalCount }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>DIALOG</title>
        </Head>
        <Container>
          <Intro>LATEST ARTICLE</Intro>
          <LatestPosts posts={posts} />
          <Pagination path="page" totalCount={totalCount} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getPostsPerPage('0')
  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
export default Index
