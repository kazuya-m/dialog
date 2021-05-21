import Head from 'next/head'
import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { BASE_URL } from 'src/constants'
import { getPostsPerPage } from 'src/lib/microcms/api'

export const Index = ({ posts, totalCount }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>DIALOG</title>
          <meta property="og:title" content="DIALOG - 浦和レッズをもっとサポートするためのコミュニティ" />
          <meta property="og:image" content="https://dialog.diamonds/assets/dialog-logo_1200x630.png" />
          <meta property="og:url" content={`${BASE_URL}`} />
          <meta property="og:description" content="test" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Container>
          <Intro headline="LATEST ARTICLES" />
          <PostsFeed posts={posts} />
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
    revalidate: 60,
  }
}
export default Index
