import styles from './styles.module.scss';

export default function Cart() {

    return(
        <div className={styles.container}>
            <div className={styles.cartContainer}>

                <div className={styles.items}>
                    <div className={styles.item}>

                        <img src="/images/products/impressora-canon-160-160.jpg" alt="impressora-canon" />
                        <div className={styles.info}>
                            <p>
                                {String('Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD').substring(0,35)}...
                            </p>

                            <div className={styles.stock}>
                                <span>Qtd.: 1</span>
                                <span>R$ 7.185,21</span>
                            </div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <img src="/images/products/impressora-canon-160-160.jpg" alt="impressora-canon" />
                        <div className={styles.info}>
                            <p>
                                {String('Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD').substring(0,35)}...
                            </p>

                            <div className={styles.stock}>
                                <span>Qtd.: 1</span>
                                <span>R$ 7.185,21</span>
                            </div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <img src="/images/products/impressora-canon-160-160.jpg" alt="impressora-canon" />
                        <div className={styles.info}>
                            <p>
                                {String('Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD').substring(0,35)}...
                            </p>

                            <div className={styles.stock}>
                                <span>Qtd.: 1</span>
                                <span>R$ 7.185,21</span>
                            </div>
                        </div>

                    </div>

                    <div className={styles.item}>

                        <img src="/images/products/impressora-canon-160-160.jpg" alt="impressora-canon" />
                        <div className={styles.info}>
                            <p>
                                {String('Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD').substring(0,35)}...
                            </p>

                            <div className={styles.stock}>
                                <span>Qtd.: 1</span>
                                <span>R$ 7.185,21</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )

}