import Link from 'next/link'
import type { VFC } from 'react'
import { CoverImage } from 'src/components/post/CoverImage'
import { Avatar } from 'src/components/shared/Avatar'
import { Author, Image } from 'src/models/posts'

type Props = {
  id: string
  title: string
  thumbnail: Image
}

export const PostPreviewMini: VFC<Props> = ({ id, title, thumbnail }) => {
  return (
    <div className="flex flex-row items-center justify-between mb-6">
      <div className="w-1/3">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:text-black-300">
            <CoverImage title={title} src={thumbnail.url} />
          </a>
        </Link>
      </div>
      <div className="w-2/3 px-2 py-1 md:px-4">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:text-black-300">
            <p className="mb-1 text-sm leading-snug md:mb-4 md:text-lg hover:text-black-300">{title}</p>
          </a>
        </Link>
      </div>
    </div>
  )
}
