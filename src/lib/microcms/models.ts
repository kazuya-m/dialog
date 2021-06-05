import type { Author, Category, Image } from 'src/models/posts'

// 記事詳細モデル
export type Contents = {
  id: string
  publishedAt: string
  title: string
  body: string
  category: Category
  author: Author
  thumbnail?: Image
}

// 記事詳細(通常)
export type ResponseGetPostDetail = Contents

// 記事詳細(プレビュー)
export type ResponseGetPostDetailAsPreview = Omit<Contents, 'publishedAt'>

export type ResponseGetPostsPerPage = {
  contents: Array<Omit<Contents, 'body'>>
  totalCount: number
  offset: number
  limit: number
}
