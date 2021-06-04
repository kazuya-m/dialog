import type { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

export const Container: VFC<Props> = ({ children }) => {
  return <div className="container px-5 mx-auto">{children}</div>
}
