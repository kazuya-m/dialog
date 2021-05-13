import Link from 'next/link'

import { SectionSeparator } from '../utils/separator/Section-separator'

export const Header = () => {
  return (
    <>
      <header className="h-1/5 text-center">
        <div className="flex flex-col justify-center py-4">
          <Link href="/">
            <a className="cursor-pointer">
              <p className="text-4xl md:text-5xl xl:text-6xl font-bold">
                <span className="text-red-500">DIA</span>LOG
              </p>
              <p className="text-xs text-black-300 mt-0.5">浦和レッズを戦術的に考えるメディア</p>
            </a>
          </Link>
        </div>
      </header>
      <SectionSeparator />
    </>
  )
}
