import type { VFC } from 'react'

type Props = {
  headline: string
}

export const Intro: VFC<Props> = ({ headline }) => {
  return (
    <section className="flex flex-row items-center mt-6 mb-3 md:mb-7">
      <h1 className="text-2xl font-bold leading-tight tracking-wide md:text-4xl md:pr-8">{headline}</h1>
    </section>
  )
}
