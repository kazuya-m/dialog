import { Avatar } from '../shared/Avatar'
import { DateFormatter } from '../utils/date/Date-formatter'
import { CoverImage } from './Cover-image'
import { PostTitle } from './Post-title'

export const PostHeader = ({ title, thumbnail, date, author }) => {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={thumbnail.url} height={620} width={1240} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto flex justify-between my-2">
        <div className="block">
          <Avatar name={author.name} picture={author.icon.url} />
        </div>
        <div className="text-base text-black-300">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
