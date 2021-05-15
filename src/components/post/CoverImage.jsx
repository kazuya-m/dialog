import cn from 'classnames'
import Image from 'next/image'

export const CoverImage = ({ title, src, id, height, width }) => {
  return (
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
}
