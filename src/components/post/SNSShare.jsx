import { useRouter } from 'next/router'
import { FaGetPocket, FaLine, FaTwitter } from 'react-icons/fa'
import { LineShareButton, PocketShareButton, TwitterShareButton } from 'react-share'
import { BASE_URL } from 'src/constants'

export const SNSShare = ({ title, accountName }) => {
  const router = useRouter()
  const path = router.asPath
  const classes = 'p-3 mx-2'
  const iconStyles = { color: '3D3D3D', fontSize: '1.4em', opacity: 0.8 }
  return (
    <ul className="flex justify-center">
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
  )
}
