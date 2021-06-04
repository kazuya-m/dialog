import Link from 'next/link'
import { CoverImage } from 'src/components/post/CoverImage'
import { MetaPost } from 'src/components/shared/MetaPost'
import type { VFC } from 'react'
import { Author, Category, Image } from 'src/models/posts'

type Props = {
  title: string
  thumbnail: Image
  date: string
  author: Author
  id: string
  category: Category
}

export const PostPreview: VFC<Props> = ({ title, thumbnail, date, author, id, category }) => {
  return (
    <div>
      <div className="mb-4">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:text-black-300">
            <CoverImage title={title} src={thumbnail.url} height={278} width={556} />
          </a>
        </Link>
      </div>
      <Link as={`/posts/${id}`} href="/posts/[id]">
        <a className="hover:text-black-300">
          <h2 className="mb-2 ml-1 text-lg font-semibold leading-snug hover:text-black-300">{title}</h2>
        </a>
      </Link>
      <MetaPost category={category} author={author} date={date} />
    </div>
  )
}
