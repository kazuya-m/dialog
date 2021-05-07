import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export const CoverImage = ({ title, src, id, height, width }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': id,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {id ? (
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
