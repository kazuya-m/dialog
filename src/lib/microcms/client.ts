import { PER_PAGE } from 'src/constants'
import { client } from 'src/lib/microcms/createClient'
import { ResponseGetPostDetail, ResponseGetPostDetailAsPreview, ResponseGetPostsPerPage } from 'src/lib/microcms/models'

// 記事詳細取得時に取得する要素
const postFields =
  'id,publishedAt,title,body,category.id,category.name,category.thumbnail.url,author.id,author.name,author.icon.url,author.accountName,author.url,author.resource,thumbnail.url'
// 記事一覧取得時に取得する要素
const postPreviewFields =
  'id,publishedAt,title,category.id,category.name,category.thumbnail.url,author.name,author.icon.url,thumbnail.url'
// 下書き取得時に取得する要素
const postDraftFields =
  'id,title,body,category.id,category.name,category.thumbnail.url,author.id,author.name,author.icon.url,author.accountName,author.url,author.resource,thumbnail.url'

// 記事詳細を取得
export const getPostById = async (id: string | undefined) => {
  const post = await client.get<ResponseGetPostDetail>({
    endpoint: 'posts',
    contentId: id,
    queries: {
      fields: postFields,
      depth: 1,
    },
    useGlobalDraftKey: false,
  })
  return post
}

// 記事下書きを取得
export const getDraftPostById = async (id: string, draftKey: string) => {
  const post = await client.get<ResponseGetPostDetailAsPreview>({
    endpoint: 'posts',
    contentId: id,
    queries: {
      fields: postDraftFields,
      depth: 1,
      draftKey,
    },
    useGlobalDraftKey: false,
  })
  return post
}

// 1ページ分の記事を取得
export const getPostsPerPage = async (offset: string | undefined) => {
  const offsetNumber = Number(offset)
  // 0(index)の場合は0
  const offsetPerPage = offsetNumber !== 0 ? (offsetNumber - 1) * PER_PAGE : 0
  const posts = await client.get<ResponseGetPostsPerPage>({
    endpoint: 'posts',
    queries: {
      orders: '-publishedAt',
      offset: offsetPerPage,
      limit: PER_PAGE,
      fields: postPreviewFields,
    },
  })

  return posts
}

// カテゴリ毎かつ1ページ分の記事を取得
export const getPostsByCategoryPerPage = async (categoryId: string | undefined, offset: string | undefined) => {
  const offsetNumber = Number(offset)
  const offsetPerPage = offsetNumber !== 0 ? (offsetNumber - 1) * PER_PAGE : 0

  const posts = await client.get<ResponseGetPostsPerPage>({
    endpoint: 'posts',
    queries: {
      orders: '-publishedAt',
      filters: `category[equals]${categoryId}`,
      offset: offsetPerPage,
      limit: PER_PAGE,
      fields: postPreviewFields,
    },
  })
  return posts
}
