import Head from 'next/head'
import Header from './components/Header';
import Cart from './components/Cart';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eplus</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Cart />

      
    </div>
  )
}
