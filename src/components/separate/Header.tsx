import Image from 'next/image'
import Link from 'next/link'

import { SectionSeparator } from '../utils/separator/SectionSeparator'

export const Header = () => {
  return (
    <header className="h-auto text-center">
      <div className="flex flex-col justify-center py-4">
        <Link href="/">
          <a className="cursor-pointer">
            <Image src="/assets/logo-w-mantra.svg" width={250} height={75} />
          </a>
        </Link>
      </div>
      <SectionSeparator />
    </header>
  )
}
