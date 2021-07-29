import Head from 'next/head'
import Header from './components/Header';
import Cart from './components/Cart';
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react';

type Item = {
  productId: number,
  name: string,
  bestPriceFormated: string,
  bestPrice: number,
  quantity: number,
  image: string,
}

interface CartItems {
  cart : Item[]
}

export default function Home() {

  const [itemsInCart , setItemsInCart ] = useState<CartItems>( {} as CartItems )

  useEffect( ()=>{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         setItemsInCart( JSON.parse(xhttp.responseText) as CartItems )
      }
    };
    xhttp.open("GET", "/products.json", true);
    xhttp.send();
    
  } ,[])

  const [showCart , setShowCart] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Eplus</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header setShowCart={setShowCart} showCart={showCart}/>
      <Cart showCart={showCart} cart={itemsInCart?.cart}/>

      
    </div>
  )
}
