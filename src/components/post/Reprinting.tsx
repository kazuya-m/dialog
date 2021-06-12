import { ExclamationCircleIcon } from '@heroicons/react/solid'
import type { VFC } from 'react'
import { TWITTER_URL } from 'src/constants'

type Props = {
  name: string
  accountName: string
  url: string
  resource: string
}

export const Reprinting: VFC<Props> = ({ name, accountName, url, resource }) => {
  return (
    <div className="flex items-center px-4 py-6 bg-yellow-100 bg-opacity-70">
      <div className="w-20">
        <ExclamationCircleIcon className="w-8 h-8 text-yellow-300" />
      </div>
      <div className="text-sm leading-relaxed tracking-wide md:text-base">
        <p>
          本記事は{name}さんがご自身の{resource}で連載中の記事になります。
        </p>
        <p>
          掲載元の
          <a href={url} target="_blank" rel="noreferrer" className="text-red-400 text-opacity-90">
            {resource}
          </a>
          や
          <a
            href={`${TWITTER_URL}/${accountName}`}
            target="_blank"
            rel="noreferrer"
            className="text-red-400 text-opacity-90"
          >
            Twitter
          </a>
          もぜひチェックしてください。
        </p>
      </div>
    </div>
  )
}
