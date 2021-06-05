import type { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { getPostsByCategoryPerPage } from 'src/lib/microcms/client'
import type { Posts } from 'src/models/posts'

type Props = {
  posts: Array<Posts>
  totalCount: number
}

export const CategoryPage: VFC<Props> = ({ posts, totalCount }) => {
  const router = useRouter()
  if (!router.isFallback && !posts[0]) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Intro headline={posts[0].category.name} />
        <PostsFeed posts={posts} />
        <Pagination path={posts[0].category.id} totalCount={totalCount} />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, { categoryId: string; number: string }> = async ({ params }) => {
  const { categoryId, number } = { ...params }

  const posts = await getPostsByCategoryPerPage(categoryId, number)

  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
    revalidate: 60 * 5,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default CategoryPage
