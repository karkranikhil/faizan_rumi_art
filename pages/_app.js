import '../styles/globals.css'
import '../styles/index.css';
function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
  </div>
}

export default MyApp
