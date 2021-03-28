import Link from 'next/link'

import { SectionSeparator } from './section-separator'

export const Header = () => {
  return (
    <>
      <header className="h-1/4 flex flex-row justify-between">
        <h1 className="text-4xl md:text-5xl xl:text-6xl px-8 py-7 font-bold">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cursor-pointer">
              <span className="text-red-600">DIA</span>LOG
            </a>
          </Link>
        </h1>
        <div className="px-7 py-7">Twitter</div>
      </header>
      <SectionSeparator />
    </>
  )
}
