import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { getPostsPerPage } from 'src/lib/microcms/client'
import type { VFC } from 'react'
import type { Posts } from 'src/models/posts'
import { GetStaticProps } from 'next'

type Props = {
  posts: Array<Posts>
  totalCount: number
}

export const Index: VFC<Props> = ({ posts, totalCount }) => {
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

export const getStaticProps: GetStaticProps = async () => {
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
