import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import favicon from '@/assets/favicons/favicon.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default (props) => {
  const { children } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Personal</title>
        <script src="/src/main.js" type="module" />
        <link rel="icon" type="image/png" sizes="40x40" href={favicon} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
