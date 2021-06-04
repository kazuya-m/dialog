import type { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

export const PostTitle: VFC<Props> = ({ children }) => {
  return (
    <h1 className="my-2 text-xl font-bold leading-tight tracking-normal text-left md:text-3xl md:leading-relaxed md:text-left">
      {children}
    </h1>
  )
}
