import { CoverImage } from 'src/components/post/Cover-image'
import { PostTitle } from 'src/components/post/Post-title'
import { MetaPost } from 'src/components/shared/MetaPost'

export const PostHeader = ({ title, thumbnail, date, author }) => {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={thumbnail.url} height={620} width={1240} />
      </div>
      <PostTitle>{title}</PostTitle>
      <MetaPost author={author} date={date} />
    </>
  )
}
