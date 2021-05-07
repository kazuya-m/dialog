import Link from 'next/link'

import { Avatar } from '../shared/Avatar'
import { DateFormatter } from '../utils/date/Date-formatter'
import { CoverImage } from './Cover-image'

export const PostPreview = ({ title, thumbnail, date, author, id }) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage id={id} title={title} src={thumbnail.url} height={278} width={556} />
      </div>
      <h3 className="text-xl mb-3 leading-snug font-semibold">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:text-black-300">{title}</a>
        </Link>
      </h3>
      <div className="flex justify-between my-2">
        <Avatar name={author.name} picture={author.icon.url} />
        <div className="text-lg text-black-300">
          <DateFormatter dateString={date} />
        </div>
      </div>
      {/* <p className="text-base text-black-400 leading-relaxed mb-4">{excerpt}</p> */}
    </div>
  )
}
