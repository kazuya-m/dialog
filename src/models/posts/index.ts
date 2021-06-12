export type Image = {
  url: string
  height: number
  width: number
}
export type Category = {
  id: string
  name: string
  thumbnail: Image
}

export type Author = {
  id: string
  name: string
  icon: Image
  accountName: string
  url?: string
  resource?: string
}

export type RelatedArticles = {
  id: string
  title: string
  category: Pick<Category, 'thumbnail'>
  thumbnail?: Image
}

export type Posts = {
  id: string
  publishedAt: string
  title: string
  category: Category
  author: Author
  thumbnail?: Image
}

export type PostDetail = {
  id: string
  publishedAt: string
  title: string
  body: string
  category: Category
  author: Author
  thumbnail?: Image
  relatedArticles?: Array<RelatedArticles>
}
