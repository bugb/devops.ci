import { Albert_Sans } from 'next/font/google'

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

const albertSans = Albert_Sans({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <main className = {albertSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
