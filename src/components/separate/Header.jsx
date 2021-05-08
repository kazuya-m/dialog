import Link from 'next/link'

import { SectionSeparator } from '../utils/separator/Section-separator'

export const Header = () => {
  return (
    <>
      <header className="h-1/5 text-center">
        <Link href="/">
          <div className="flex flex-col justify-center py-4">
            <p className="text-4xl md:text-5xl xl:text-6xl font-bold">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="cursor-pointer">
                <span className="text-red-500">DIA</span>LOG
              </a>
            </p>
            <p className="text-xs text-black-300 mt-0.5">浦和レッズを戦術的に考えるメディア</p>
          </div>
        </Link>
      </header>
      <SectionSeparator />
    </>
  )
}
