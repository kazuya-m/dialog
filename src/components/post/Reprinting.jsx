import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { TWITTER_URL } from 'src/constants'

export const Reprinting = ({ author }) => {
  return (
    <div className="flex items-center px-4 py-6 bg-yellow-100 bg-opacity-70">
      <div className="w-20">
        <ExclamationCircleIcon className="w-10 h-10 text-yellow-300" />
      </div>
      <div className="text-sm leading-relaxed tracking-wide md:text-base">
        <p>
          本記事は{author.name}さんがご自身の{author.resource}で連載中の記事になります。
        </p>
        <p>
          掲載元の
          <a href={author.url} target="_blank" rel="noreferrer" className="text-red-400 text-opacity-90">
            {author.resource}
          </a>
          や
          <a
            href={`${TWITTER_URL}/${author.accountName}`}
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
