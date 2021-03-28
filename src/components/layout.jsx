import { Footer } from './footer'
import { Header } from './header'
import { Meta } from './meta'

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
