import { Footer } from './Footer'
import { Header } from './Header'
import { Meta } from './Meta'

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="text-black-default">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
