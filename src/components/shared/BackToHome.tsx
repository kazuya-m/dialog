import { ChevronLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const BackToHome = () => {
  return (
    <Link href="/">
      <a className="flex items-center text-red-400 cursor-pointer opacity-80">
        <ChevronLeftIcon className="inline w-4 h-4" />
        <p>ホームに戻る</p>
      </a>
    </Link>
  )
}
