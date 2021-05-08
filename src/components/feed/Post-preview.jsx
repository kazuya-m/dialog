import Link from 'next/link'
import { CoverImage } from 'src/components/post/Cover-image'
import { MetaPost } from 'src/components/shared/MetaPost'

export const PostPreview = ({ title, thumbnail, date, author, id }) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage id={id} title={title} src={thumbnail.url} height={278} width={556} />
      </div>
      <h3 className="text-lg mb-3 leading-snug font-semibold">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:text-black-300">{title}</a>
        </Link>
      </h3>
      <MetaPost author={author} date={date} />
      {/* <p className="text-base text-black-400 leading-relaxed mb-4">{excerpt}</p> */}
    </div>
  )
}
