/* eslint-disable @typescript-eslint/no-unsafe-return */
import Head from 'next/head'
import { LatestPosts } from 'src/components/feed/Latest-posts'
import { Intro } from 'src/components/intro'
import { Pagination } from 'src/components/Pagination'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { getPageAmount } from 'src/lib/calculator/page-amount'
import { getAllCategories, getAllPosts, getPostsByCategoryPerPage } from 'src/lib/microcms/api'

export const CategoryPage = ({ posts, totalCount, categoryName }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>DIALOG</title>
        </Head>
        <Container>
          <Intro>{categoryName}</Intro>
          <LatestPosts posts={posts} />
          <Pagination path={posts.id} totalCount={totalCount} />
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
      categoryName: posts.contents[0].category.name,
    },
  }
}

export const getStaticPaths = async () => {
  const categories = await getAllCategories()
  const categoryIds = categories.contents.map((content) => {
    return { categoryId: content.id }
  })

  const allPosts = await getAllPosts()

  const pageAmountArray = getPageAmount(1, allPosts.totalCount)

  const categoryPages = pageAmountArray.map((number) => {
    return { pageNumber: number }
  })

  const paths = categoryIds
    .map(({ categoryId }) => {
      return categoryPages.map(({ pageNumber }) => {
        return { params: { categoryId, number: pageNumber.toString() } }
      })
    })
    .flat()

  return { paths, fallback: false }
}

export default CategoryPage
