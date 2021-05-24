/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createClient } from 'microcms-js-sdk'
import { PER_PAGE } from 'src/constants'

const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.API_KEY,
})

// 記事詳細取得時に取得する要素
const postFields = 'id,publishedAt,title,body,category.id,category.name,category.thumbnail,author,thumbnail.url'
// 記事一覧取得時に取得する要素
const postPreviewFields =
  'id,publishedAt,title,category.id,category.name,category.thumbnail,author.name,author.icon.url,thumbnail.url'

// 記事詳細を取得
export const getPostById = async (id) => {
  const post = await client.get({
    endpoint: 'posts',
    contentId: id,
    queries: {
      fields: postFields,
      depth: 1,
    },
  })
  return post
}

// 全記事の数を取得
export const getAllPostsTotalCount = async () => {
  const response = await client.get({
    endpoint: 'posts',
    queries: {
      limit: 0,
      fields: 'totalCount',
    },
  })
  return response.totalCount
}

// 1ページ分の記事を取得
export const getPostsPerPage = async (offset) => {
  const offsetNumber = Number(offset)
  // 0(index)の場合は0
  const offsetPerPage = offsetNumber !== 0 ? (offsetNumber - 1) * PER_PAGE : 0
  const posts = await client.get({
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

// カテゴリ毎の全記事数を取得
export const getPostsCountCategories = async (categoryId) => {
  const response = await client.get({
    endpoint: 'categories',
    queries: {
      filters: `category[equals]${categoryId}`,
      limit: 0,
      fields: 'totalCount',
    },
  })
  return response.totalCount
}

// 全てのカテゴリを取得(idと名称) カテゴリ一覧ページ実装時に使う
// export const getAllCategories = async () => {
//   const allCategories = fetch(`${process.env.GET_CATEGORIES_API}?limit=100&?fields=id,name`, key)
//     .then((res) => {
//       return res.json()
//     })
//     .catch(() => {
//       return null
//     })
//   return allCategories
// }

// カテゴリ毎かつ1ページ分の記事を取得
export const getPostsByCategoryPerPage = async (categoryId, offset) => {
  const offsetNumber = Number(offset)
  const offsetPerPage = offsetNumber !== 0 ? (offsetNumber - 1) * PER_PAGE : 0

  const posts = await client.get({
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
