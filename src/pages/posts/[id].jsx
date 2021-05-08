import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PostBody } from 'src/components/post/Post-body'
import { PostHeader } from 'src/components/post/Post-header'
import { Layout } from 'src/components/separate/Layout'
import { BackToHome } from 'src/components/shared/BackToHome.tsx'
import { Container } from 'src/components/shared/Container'
import { SectionSeparator } from 'src/components/utils/separator/Section-separator'

export const Post = ({ post }) => {
  // const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <Layout>
      <Container>
        <article className="mt-10 mb-12 max-w-2xl mx-auto">
          <Head>
            <title>{post.title}</title>
            {/* <meta property="og:image" content={post.ogImage.url} /> */}
          </Head>
          <PostHeader title={post.title} thumbnail={post.thumbnail} date={post.publishedAt} author={post.author} />
          <SectionSeparator />
          <PostBody content={post.body} />
        </article>
        <BackToHome />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch(`${process.env.GET_POSTS_API}/${id}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return {
    props: {
      post: data,
      revalidate: 60,
    },
  }
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const posts = await fetch(process.env.GET_POSTS_API, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  const paths = posts.contents.map((content) => {
    return `/posts/${content.id}`
  })
  return { paths, fallback: false }
}

export default Post
