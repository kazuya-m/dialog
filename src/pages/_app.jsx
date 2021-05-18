import '../styles/index.css'

import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { existsGaId, pageView } from 'src/lib/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      pageView(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    // eslint-disable-next-line consistent-return
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default App
