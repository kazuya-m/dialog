import Image from 'next/image'
import Link from 'next/link'

import { SectionSeparator } from '../utils/separator/SectionSeparator'

export const Header = () => {
  return (
    <header className="text-center h-1/5">
      <div className="flex flex-col justify-center py-4">
        <Link href="/">
          <a className="cursor-pointer">
            <Image src="/assets/logo-w-mantra.svg" width={250} height={90} />
          </a>
        </Link>
      </div>
      <SectionSeparator />
    </header>
  )
}
