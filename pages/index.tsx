import Head from 'next/head'
import Header from '../src/components/header'
import Home from '../src/components/home'
import About from '../src/components/about'
import Services from '../src/components/services'
import FAQ from '../src/components/faq'
import Budget from '../src/components/budget'
import Footer from '../src/components/footer'
import ChatPopup from '../src/components/chatpopup'
import Portfolio from '../src/components/portfolio'


export default function HomePage() {
  console.log({ Header, Home, About, Services, FAQ, Footer, ChatPopup });

  return (
    <div>
      <Head>
        <title>Brise Home Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio/>
        <FAQ />
        <Budget />
      </main>

      <Footer />
      <ChatPopup />
    </div>
  )
}
