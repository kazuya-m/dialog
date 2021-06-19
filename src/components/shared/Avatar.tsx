import Image from 'next/image'
import type { VFC } from 'react'
import { TWITTER_URL } from 'src/constants'

type Props = {
  name: string
  picture: string
  accountName: string
  width?: number
  height?: number
}

export const Avatar: VFC<Props> = ({ name, picture, accountName, width = 32, height = 32 }) => {
  const url = `${TWITTER_URL}/${accountName}`
  return (
    <div className="flex items-center justify-start">
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={picture} width={width} height={height} alt={name} className="rounded-full" />
      </a>
      <div className="ml-2 text-sm text-black-300">{name}</div>
    </div>
  )
}
