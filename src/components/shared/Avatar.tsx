import Image from 'next/image'
import type { VFC } from 'react'

type Props = {
  name: string
  picture: string
}

export const Avatar: VFC<Props> = ({ name, picture }) => {
  return (
    <div className="flex items-center justify-start">
      <Image src={picture} width={32} height={32} alt={name} className="rounded-full" />
      <div className="ml-2 text-sm">{name}</div>
    </div>
  )
}
