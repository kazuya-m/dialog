import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PostBody } from '../../components/post/Post-body'
import { PostHeader } from '../../components/post/Post-header'
import { PostTitle } from '../../components/post/Post-title'
import { Layout } from '../../components/separate/Layout'
import { Container } from '../../components/shared/Container'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'

export const Post = ({ post }) => {
  // const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <Layout>
      <Container>
        <>
          <article className="mt-10 mb-32">
            <Head>
              <title>{post.title}</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <PostTitle>{post.title}</PostTitle>
            <PostBody content={post.body} />
          </article>
        </>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch(`https://dialog.microcms.io/api/v1/posts/${id}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return {
    props: {
      post: data,
    },
  }
}

//   const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
//   // eslint-disable-next-line @typescript-eslint/await-thenable
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   }
// }

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const posts = await fetch('https://dialog.microcms.io/api/v1/posts', key)
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

// export const getStaticPaths = () => {
//   const posts = getAllPosts(['slug'])

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }

export default Post
