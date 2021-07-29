import Head from 'next/head'
import Header from './components/Header';
import Cart from './components/Cart';
import styles from '../styles/Home.module.scss'
import { useState } from 'react';

export default function Home() {
  const [showCart , setShowCart] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Eplus</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header setShowCart={setShowCart} showCart={showCart}/>
      <Cart showCart={showCart}/>

      
    </div>
  )
}
