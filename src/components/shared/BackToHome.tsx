import { ChevronLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const BackToHome = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center text-black-300">
        <ChevronLeftIcon className="w-4 h-4 inline" />
        <a>ホームに戻る</a>
      </div>
    </Link>
  )
}
