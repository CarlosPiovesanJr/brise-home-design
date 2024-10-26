import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'
import '../src/styles/globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}