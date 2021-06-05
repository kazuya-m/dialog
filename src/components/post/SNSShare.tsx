import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { FaLine, FaTwitter } from 'react-icons/fa'
import { LineShareButton, TwitterShareButton } from 'react-share'
import { BASE_URL } from 'src/constants'

type Props = {
  title: string
  accountName: string
  withMessage?: boolean
}

export const SNSShare: VFC<Props> = ({ title, accountName, withMessage = true }) => {
  const router = useRouter()
  const path = router.asPath
  const iconStyles = { color: '3D3D3D', fontSize: '1.4em', opacity: 0.8 }
  return (
    <div>
      {withMessage && (
        <div className="text-sm leading-relaxed text-center">
          <p>浦和レッズについて考えたこと</p>
          <p>ぜひシェアしてください</p>
        </div>
      )}
      <ul className={`flex ${withMessage ? 'justify-center' : 'justify-end'}`}>
        <li className="px-2 py-4">
          <TwitterShareButton title={`${title} | @${accountName}\n`} url={`${BASE_URL}${path}`}>
            <FaTwitter style={iconStyles} />
          </TwitterShareButton>
        </li>
        <li className="px-2 py-4">
          <LineShareButton title={`${title}`} url={`${BASE_URL}${path}`}>
            <FaLine style={iconStyles} />
          </LineShareButton>
        </li>
      </ul>
    </div>
  )
}
