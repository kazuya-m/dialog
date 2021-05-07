/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Head from 'next/head'
import { LatestPosts } from 'src/components/feed/Latest-posts'
import { Intro } from 'src/components/intro'
import { Pagination } from 'src/components/Pagination'
import { Layout } from 'src/components/separate/Layout'
import { Container } from 'src/components/shared/Container'
import { PER_PAGE } from 'src/constants'

export const PostPage = ({ posts, totalCount }) => {
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

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const posts = await fetch(`${process.env.GET_POSTS_API}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })

  const pageNumbers = []

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i
    })
  }

  const paths = range(1, Math.ceil(posts.totalCount / PER_PAGE)).map((number) => {
    return `/page/${number}`
  })

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps = async (context) => {
  const { number } = context.params

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const data = await fetch(`${process.env.GET_POSTS_API}?offset=${(number - 1) * 5}&limit=5`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })

  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount,
    },
  }
}

export default PostPage
