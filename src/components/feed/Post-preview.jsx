import Link from 'next/link'
import { CoverImage } from 'src/components/post/Cover-image'
import { MetaPost } from 'src/components/shared/MetaPost'

export const PostPreview = ({ title, thumbnail, date, author, id, category }) => {
  return (
    <div>
      <div className="mb-4">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:text-black-300">
            <CoverImage id={id} title={title} src={thumbnail.url} height={278} width={556} />
          </a>
        </Link>
      </div>
      <Link as={`/posts/${id}`} href="/posts/[id]">
        <a className="hover:text-black-300">
          <h2 className="mb-2 ml-1 text-lg font-semibold leading-snug hover:text-black-300">{title}</h2>
        </a>
      </Link>
      <MetaPost category={category} author={author} date={date} />
      {/* <p className="mb-4 text-base leading-relaxed text-black-400">{excerpt}</p> */}
    </div>
  )
}
