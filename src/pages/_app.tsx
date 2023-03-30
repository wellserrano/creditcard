import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Source_Sans_Pro } from 'next/font/google'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'], 
  weight: ["400", "600"],
  variable: '--font-source-sans-pro'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sourceSansPro.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
