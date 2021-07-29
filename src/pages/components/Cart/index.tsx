import {Animated} from 'react-animated-css'; 
import styles from './styles.module.scss';

interface Item {
    productId: number,
    name: string,
    bestPriceFormated: string,
    bestPrice: number,
    quantity: number,
    image: string,
}

interface CartProps {
    showCart : boolean
    cart : {
        item: Item[]
    }
}



export default function Cart( { showCart , cart } : CartProps ) {

    const total = cart?.item.reduce( (acc : number ,element : Item)=> ( acc += element.bestPrice ), 0 )
    const totalFormated = new Intl.NumberFormat(
        'pt-BR' ,
        {
            style: 'currency', currency: 'BRL'
        } ).format(total / 100)
    
    console.log(total / 100)
    console.log(totalFormated)

    return(
        <>
        <Animated
        isVisible={showCart}
        animationIn='slideInDown'
        animationOut='slideOutUp'
        className={styles.animationAlign}
        >
            {/* <div className={`${styles.container} ${showCart ? '' : styles.marginTop}`} */}
            <div className={styles.container}>
                <div className={styles.cartContainer}>

                    <div className={styles.items}>

                        {
                            cart?.item.map( item => (
                                <div className={styles.item} key={item.productId}>

                                    <img src={item.image} alt={item.name} />
                                    <div className={styles.info}>
                                        <p>
                                            {String(item.name).substring(0,35)}...
                                        </p>
        
                                        <div className={styles.stock}>
                                            <span>Qtd.: {item.quantity}</span>
                                            <span>{item.bestPriceFormated}</span>
                                        </div>
                                    </div>
    
                                </div>
                            ) )
                        }
                    </div>

                    <div className={styles.total}>
                        <span>Total do pedido:</span>
                        <span>{total === NaN ? 'R$ 0,00' : totalFormated }</span>
                    </div>

                    <button>
                        FINALIZAR COMPRA
                    </button>

                </div>

            </div>
        </Animated>
        </>
    )

}