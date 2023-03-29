import { Albert_Sans } from 'next/font/google'

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';


export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
