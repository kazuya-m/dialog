import { useRouter } from 'next/router'
import { FaLine, FaTwitter } from 'react-icons/fa'
import { LineShareButton, TwitterShareButton } from 'react-share'
import { BASE_URL } from 'src/constants'

export const SNSShare = ({ title, accountName, withMessage = true }) => {
  const router = useRouter()
  const path = router.asPath
  const classes = 'px-2 py-3'
  const ulClasses = withMessage ? 'flex justify-center' : 'flex justify-end'
  const iconStyles = { color: '3D3D3D', fontSize: '1.4em', opacity: 0.8 }
  return (
    <div>
      {withMessage && (
        <div className="text-sm leading-relaxed text-center">
          <p>浦和レッズについて考えたこと</p>
          <p>ぜひシェアしてください</p>
        </div>
      )}
      <ul className={ulClasses}>
        <li className={classes}>
          <TwitterShareButton title={`${title} | @${accountName}\n`} url={`${BASE_URL}${path}`}>
            <FaTwitter style={iconStyles} />
          </TwitterShareButton>
        </li>
        <li className={classes}>
          <LineShareButton title={`${title}`} url={`${BASE_URL}${path}`}>
            <FaLine style={iconStyles} />
          </LineShareButton>
        </li>
      </ul>
    </div>
  )
}
