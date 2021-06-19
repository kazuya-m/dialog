import type { PostDetail } from 'src/models/posts'

// 記事詳細(通常)
export type ResponseGetPostDetail = PostDetail

// 記事詳細(プレビュー)
export type ResponseGetPostDetailAsPreview = Omit<PostDetail, 'publishedAt'>

// 記事一覧
export type ResponseGetPostsPerPage = {
  contents: Array<Omit<PostDetail, 'body'>>
  totalCount: number
  offset: number
  limit: number
}
