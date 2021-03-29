import Head from 'next/head'

import { Intro } from '../components/intro'
import { LatestPosts } from '../components/post/Latest-posts'
import { Layout } from '../components/separate/Layout'
import { Container } from '../components/shared/Container'
import { getAllPosts } from '../lib/api'

export const Index = ({ allPosts }) => {
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>DIALOG</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <LatestPosts posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps = () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}

export default Index
