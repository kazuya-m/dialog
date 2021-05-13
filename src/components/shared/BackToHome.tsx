import { ChevronLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const BackToHome = () => {
  return (
    <Link href="/">
      <a>
        <div className="cursor-pointer flex items-center text-black-300">
          <ChevronLeftIcon className="w-4 h-4 inline" />
          ホームに戻る
        </div>
      </a>
    </Link>
  )
}
