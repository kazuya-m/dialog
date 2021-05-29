import { CoverImage } from 'src/components/post/CoverImage'
import { PostTitle } from 'src/components/post/PostTitle'
import { MetaPost } from 'src/components/shared/MetaPost'

export const PostHeader = ({ title, thumbnail, date, author, category }) => {
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
