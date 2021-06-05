import type { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { getPostsPerPage } from 'src/lib/microcms/client'
import type { Posts } from 'src/models/posts'

type Props = {
  posts: Array<Posts>
  totalCount: number
}

export const PostPage: VFC<Props> = ({ posts, totalCount }) => {
  const router = useRouter()
  if (!router.isFallback && !posts[0]) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Intro headline="" />
        <PostsFeed posts={posts} />
        <Pagination path="page" totalCount={totalCount} />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, { number: string }> = async ({ params }) => {
  const pageNumber = params?.number
  const data = await getPostsPerPage(pageNumber)

  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount,
    },
    revalidate: 60 * 5,
  }
}

export const getStaticPaths: GetStaticPaths<{ number: string }> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default PostPage
