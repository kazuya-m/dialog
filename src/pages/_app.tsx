import '../styles/index.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { existsGaId, pageView } from 'src/lib/gtag'

const App = (props: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path: string) => {
      console.log(path)
      pageView(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    // eslint-disable-next-line consistent-return
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <props.Component {...props.pageProps} />
}

export default App
