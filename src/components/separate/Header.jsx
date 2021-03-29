import Link from 'next/link'

import { SectionSeparator } from '../utils/separator/Section-separator'

export const Header = () => {
  return (
    <>
      <header className="h-1/5 flex flex-row justify-between">
        <h1 className="text-4xl md:text-5xl xl:text-6xl px-5 py-4 font-bold">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cursor-pointer">
              <span className="text-red-500">DIA</span>LOG
            </a>
          </Link>
        </h1>
        <div className="px-7 py-6">Twitter</div>
      </header>
      <SectionSeparator />
    </>
  )
}
