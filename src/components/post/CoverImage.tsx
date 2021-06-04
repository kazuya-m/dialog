import Image from 'next/image'
import type { VFC } from 'react'

type Props = {
  title: string
  src: string
  height: number
  width: number
}

export const CoverImage: VFC<Props> = ({ title, src, height, width }) => {
  return (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="transition-shadow duration-200 shadow-sm hover:shadow-md"
      layout="responsive"
      width={width}
      height={height}
    />
  )
}
