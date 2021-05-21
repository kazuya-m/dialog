import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PostsFeed } from 'src/components/feed/PostsFeed'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { Intro } from 'src/components/shared/Intro'
import { Pagination } from 'src/components/shared/Pagination'
import { getPostsByCategoryPerPage } from 'src/lib/microcms/api'

export const CategoryPage = ({ posts, totalCount }) => {
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
          <Intro headline={posts[0].category.name} />
          <PostsFeed posts={posts} />
          <Pagination path={posts[0].category.id} totalCount={totalCount} />
        </Container>
      </Layout>
    </>
  )
}

// データを取得
export const getStaticProps = async (context) => {
  const { categoryId, number } = context.params

  const posts = await getPostsByCategoryPerPage(categoryId, number)

  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
    revalidate: 60 * 5,
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default CategoryPage
