/* eslint-disable @typescript-eslint/no-unsafe-return */
import Head from 'next/head'
import { LatestPosts } from 'src/components/feed/Latest-posts'
import { Intro } from 'src/components/intro'
import { Pagination } from 'src/components/Pagination'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { PER_PAGE } from 'src/constants'

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
          <Pagination totalCount={totalCount} />
        </Container>
      </Layout>
    </>
  )
}

// データを取得
export const getStaticProps = async (context) => {
  const { categoryId, number } = context.params
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const data = await fetch(`${process.env.GET_POSTS_API}?filters=category[equals]${categoryId}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  console.log(data)
  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount,
      categoryName: data.contents[0].category.name,
    },
  }
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const categories = await fetch(process.env.GET_CATEGORIES_API, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  const categoryIds = categories.contents.map((content) => {
    return { categoryId: content.id }
  })

  const allPosts = await fetch(`${process.env.GET_POSTS_API}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i
    })
  }

  const categoryPages = range(1, Math.ceil(allPosts.totalCount / PER_PAGE)).map((number) => {
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
