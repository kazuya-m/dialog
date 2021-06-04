import Head from 'next/head'
import { useRouter } from 'next/router'
import { BASE_URL } from 'src/constants'
import { Footer } from './Footer'
import { Header } from './Header'
import type { ReactNode, VFC } from 'react'

type UniqueMeta = {
  title: string
  cardImage: string
  description?: string
}

type Props = {
  uniqueMeta?: UniqueMeta
  children: ReactNode
}

export const Layout: VFC<Props> = ({ uniqueMeta, children }) => {
  const router = useRouter()

  const meta = {
    title: uniqueMeta?.title
      ? `${uniqueMeta.title} | DIALOG`
      : 'DIALOG | 浦和レッズをもっとサポートするためのコミュニティ',
    cardImage: uniqueMeta?.cardImage ?? `${BASE_URL}/assets/dialog-logo_1200x630.png`,
    description:
      uniqueMeta?.description ??
      'DIALOG | 浦和レッズをもっとサポートするために。クラブやチームと目線を合わせるためのコミュニティ。',
    ...uniqueMeta,
  }
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${BASE_URL}}/${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maybe_km" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Header />
      <div className="text-black-default">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
