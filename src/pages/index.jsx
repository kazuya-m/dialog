import Head from 'next/head'
import { LatestPosts } from 'src/components/feed/Latest-posts'
import { Intro } from 'src/components/intro'
import { Pagination } from 'src/components/Pagination'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'

export const Index = ({ posts, totalCount }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>DIALOG</title>
        </Head>
        <Container>
          <Intro />
          <LatestPosts posts={posts} />
          <Pagination totalCount={totalCount} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const posts = await fetch(`${process.env.GET_POSTS_API}?offset=0&limit=5`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
export default Index
