import { ChevronLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const BackToHome = () => {
  return (
    <>
      <Link href="/">
        <a className="flex items-center cursor-pointer">
          <ChevronLeftIcon className="w-4 h-4 inline" />
          <p>ホームに戻る</p>
        </a>
      </Link>
    </>
  )
}
