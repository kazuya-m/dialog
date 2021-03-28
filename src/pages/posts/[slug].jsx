import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '../../components/container'
import { Layout } from '../../components/layout'
import { PostBody } from '../../components/post-body'
import { PostHeader } from '../../components/post-header'
import { PostTitle } from '../../components/post-title'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'

export const Post = ({ post, morePosts, preview }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mt-10 mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths = () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
