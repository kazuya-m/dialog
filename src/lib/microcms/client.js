/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createClient } from 'microcms-js-sdk'
import { PER_PAGE } from 'src/constants'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.API_KEY,
})

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
export const getPostById = async (id) => {
  const post = await client.get({
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
export const getDraftPostById = async (id, draftKey) => {
  const post = await client.get({
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
