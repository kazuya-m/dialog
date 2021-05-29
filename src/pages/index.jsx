import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { getPostsPerPage } from 'src/lib/microcms/client'

export const Index = ({ posts, totalCount }) => {
  return (
    <Layout>
      <Container>
        <Intro headline="LATEST ARTICLES" />
        <PostsFeed posts={posts} />
        <Pagination path="page" totalCount={totalCount} />
      </Container>
    </Layout>
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
