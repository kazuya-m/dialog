import { useRouter } from 'next/router'
import { FaGetPocket, FaLine, FaTwitter } from 'react-icons/fa'
import { LineShareButton, PocketShareButton, TwitterShareButton } from 'react-share'
import { BASE_URL } from 'src/constants'

export const SNSShare = ({ title, accountName }) => {
  const router = useRouter()
  const path = router.asPath
  const classes = 'block mx-3 p-3'
  const iconStyles = { color: '3D3D3D', fontSize: '1.4em', opacity: 0.8 }
  return (
    <>
      <ul className="flex justify-center">
        <li>
          <TwitterShareButton title={`${title} | ${accountName}\n`} url={`${BASE_URL}${path}`}>
            <span className={classes}>
              test
              {/* <FaTwitter color="3D3D3D" /> */}
            </span>
          </TwitterShareButton>
        </li>
        <li>
          <LineShareButton title={`${title}`} url={`${BASE_URL}${path}`}>
            <span className={classes}>
              test
              {/* <FaLine color="3d3d3d" /> */}
            </span>
          </LineShareButton>
        </li>
        {/* <li>
        <PocketShareButton title={`${title}`} url={`${BASE_URL}${path}`}>
          <span className={classes}>
            <FaGetPocket style={iconStyles} />
          </span>
        </PocketShareButton>
      </li> */}
      </ul>
    </>
  )
}
