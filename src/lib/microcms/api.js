/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PER_PAGE } from 'src/constants'

const key = {
  headers: { 'X-API-KEY': process.env.API_KEY },
}

// 全ての記事を取得
export const getAllPosts = async () => {
  const allPosts = await fetch(process.env.GET_POSTS_API, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return allPosts
}

// IDで記事を取得
export const getPostById = async (id) => {
  const post = await fetch(`${process.env.GET_POSTS_API}/${id}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return post
}

// ページ分の記事を取得
export const getPostsPerPage = async (offset) => {
  const posts = await fetch(`${process.env.GET_POSTS_API}?offset=${offset * PER_PAGE}&limit=${PER_PAGE}`, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })

  return posts
}

// カテゴリ毎かつページ分の記事を取得
export const getPostsByCategoryPerPage = async (categoryId, offset) => {
  const posts = await fetch(
    `${process.env.GET_POSTS_API}?filters=category[equals]${categoryId}[and]offset=${
      offset * PER_PAGE
    }&limit=${PER_PAGE}`,
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

// 全てのカテゴリを取得
export const getAllCategories = async () => {
  const allCategories = fetch(process.env.GET_CATEGORIES_API, key)
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return null
    })
  return allCategories
}
