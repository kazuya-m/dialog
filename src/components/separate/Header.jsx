import Link from 'next/link'

import { SectionSeparator } from '../utils/separator/SectionSeparator'

export const Header = () => {
  return (
    <>
      <header className="text-center h-1/5">
        <div className="flex flex-col justify-center py-4">
          <Link href="/">
            <a className="cursor-pointer">
              <p className="text-4xl font-bold md:text-5xl xl:text-6xl">
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
