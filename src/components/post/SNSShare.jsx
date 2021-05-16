import { useRouter } from 'next/router'
import { FaGetPocket, FaLine, FaTwitter } from 'react-icons/fa'
import { LineShareButton, PocketShareButton, TwitterShareButton } from 'react-share'
import { BASE_URL } from 'src/constants'

export const SNSShare = ({ title, accountName }) => {
  const router = useRouter()
  const path = router.asPath
  const classes = 'p-3'
  const iconStyles = { color: '3D3D3D', fontSize: '1.4em', opacity: 0.8 }
  return (
    <div>
      <ul className="flex justify-end mt-10">
        <li>
          <TwitterShareButton title={`${title} | ${accountName}\n`} url={`${BASE_URL}${path}`}>
            <span className={classes}>
              <FaTwitter style={iconStyles} />
            </span>
          </TwitterShareButton>
        </li>
        <li>
          <LineShareButton title={`${title}`} url={`${BASE_URL}${path}`}>
            <span className={classes}>
              <FaLine style={iconStyles} />
            </span>
          </LineShareButton>
        </li>
        <li>
          <PocketShareButton title={`${title}`} url={`${BASE_URL}${path}`}>
            <span className={classes}>
              <FaGetPocket style={iconStyles} />
            </span>
          </PocketShareButton>
        </li>
      </ul>
    </div>
  )
}
