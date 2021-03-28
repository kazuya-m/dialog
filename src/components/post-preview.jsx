import Link from 'next/link'

import { Avatar } from './avatar'
import { CoverImage } from './cover-image'
import { DateFormatter } from './date-formatter'

export const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} height={278} width={556} />
      </div>
      <h3 className="text-2xl mb-3 leading-snug font-semibold">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="hover:text-gray-700">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base text-gray-700 leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
