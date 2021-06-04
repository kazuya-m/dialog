import { CoverImage } from 'src/components/post/CoverImage'
import { PostTitle } from 'src/components/post/PostTitle'
import { MetaPost } from 'src/components/shared/MetaPost'
import type { VFC } from 'react'
import { Author, Category, Image } from 'src/models/posts'

type Props = {
  title: string
  thumbnail: Image
  date: string
  author: Author
  category: Category
}

export const PostHeader: VFC<Props> = ({ title, thumbnail, date, author, category }) => {
  return (
    <div>
      <div className="mb-4">
        <CoverImage title={title} src={thumbnail.url} height={620} width={1240} />
      </div>
      <PostTitle>{title}</PostTitle>
      <MetaPost author={author} date={date} category={category} />
    </div>
  )
}
