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
          <h2 className="text-lg mb-2 ml-1 leading-snug font-semibold hover:text-black-300">{title}</h2>
        </a>
      </Link>
      <MetaPost category={category} author={author} date={date} />
      {/* <p className="text-base text-black-400 leading-relaxed mb-4">{excerpt}</p> */}
    </div>
  )
}
