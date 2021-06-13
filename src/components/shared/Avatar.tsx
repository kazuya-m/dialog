import Image from 'next/image'
import type { VFC } from 'react'

type Props = {
  name: string
  picture: string
  width?: number
  height?: number
}

export const Avatar: VFC<Props> = ({ name, picture, width = 32, height = 32 }) => {
  return (
    <div className="flex items-center justify-start">
      <Image src={picture} width={width} height={height} alt={name} className="rounded-full" />
      <div className="ml-2 text-sm text-black-300">{name}</div>
    </div>
  )
}
