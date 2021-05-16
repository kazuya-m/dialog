/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PER_PAGE } from 'src/constants'

const key = {
  headers: { 'X-API-KEY': process.env.API_KEY },
}

// 記事詳細取得時に取得する要素
const postFields = 'id,publishedAt,title,body,category.id,category.name,author,thumbnail.url'
// 記事一覧取得時に取得する要素
const postPreviewFields = 'id,publishedAt,title,category.id,category.name,author.name,author.icon.url,thumbnail.url'

// 全記事の数を取得
export const getAllPostsTotalCount = async () => {
  const response = await fetch(`${process.env.GET_POSTS_API}?limit=0&fields=totalCount`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return response.totalCount
}

// 記事詳細を取得
export const getPostById = async (id) => {
  const post = await fetch(`${process.env.GET_POSTS_API}/${id}?fields=${postFields}&depth=1`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return post
}

// 1ページ分の記事を取得
export const getPostsPerPage = async (offset) => {
  const offsetNumber = Number(offset)
  // 0(index)の場合は0
  const offsetPerPage = offsetNumber !== 0 ? (offsetNumber - 1) * PER_PAGE : 0
  const posts = await fetch(
    `${process.env.GET_POSTS_API}?orders=-publishedAt&offset=${offsetPerPage}&limit=${PER_PAGE}&fields=${postPreviewFields}`,
    key,
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return null
    })
  return posts
}

// カテゴリ毎の全記事数を取得
export const getPostsCountCategories = async (categoryId) => {
  const response = await fetch(
    `${process.env.GET_POSTS_API}?filters=category=${categoryId}&limit=0&fields=totalCount`,
    key,
  )
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
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
  const posts = await fetch(
    `${process.env.GET_POSTS_API}?orders=-publishedAt&filters=category[equals]${categoryId}&offset=${offsetPerPage}&limit=${PER_PAGE}&fields=${postPreviewFields}`,
    key,
  )
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })

  return posts
}
