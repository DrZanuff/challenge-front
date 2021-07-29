import { useState , useEffect } from 'react';
import { Search , Person , ShoppingCart , Menu , Close} from '@material-ui/icons';
import Link from 'next/link';
import styles from './styles.module.scss';

interface HeaderProps {
    showCart : boolean;
    setShowCart : (state : boolean) => void;
}

export default function Header( { setShowCart , showCart } : HeaderProps ) {
    const minDesktopSize = 1280;

    const [isDesktop, setDesktop] = useState(true);
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);
    const [selectedIcon , setSelectedIcon ] = useState(
        { search : false , user : false , cart : true }
    )

    function handleIconSelect(status : boolean) {
        let newSelectedIcon = {...selectedIcon}

        newSelectedIcon['cart'] = !selectedIcon['cart'];

        setSelectedIcon(newSelectedIcon);
        setShowCart(!showCart);
    }
 
    useEffect(() => {
        window.addEventListener("resize", ()=>{ 
            setDesktop(window.innerWidth > minDesktopSize);
         });
    },[]);


    return (
        <>
            <header className={styles.container}>
                <div className={styles.content}>
                    {
                    !isDesktop &&
                    <div onClick={()=> setIsMobileMenuOpen(true)}>
                        <Menu fontSize="large" />
                    </div>
                    }

                    <img src="/images/logo/agencia-eplus-n-logo.png" alt="Logo Eplus"></img>

                    {
                    isDesktop &&
                    <nav>
                        <Link href="/"><a>Lorem Ispum</a></Link>
                        <Link href="/"><a>Lorem Ispum</a></Link>
                        <Link href="/"><a>Lorem Ispum</a></Link>
                        <Link href="/"><a>Lorem Ispum</a></Link>
                    </nav>
                    }

                    <div className={styles.user}>
                        <div>
                            <Search style={{ fontSize: 30 }}></Search>
                        </div>

                        <div>
                            <Person style={{ fontSize: 30 }}></Person>
                        </div>

                        <div 
                        className={selectedIcon.cart ? styles.active : ''}
                        onClick={ () => handleIconSelect(true)}
                        >
                            <ShoppingCart style={{ fontSize: 30 }}></ShoppingCart>
                            <span></span>
                        </div>
                        
                    </div>

                </div>

            </header>
            { 
            isMobileMenuOpen &&
            <div 
            className={styles.openMenu}
            onClick={()=> setIsMobileMenuOpen(false)}
            onMouseLeave={()=> setIsMobileMenuOpen(false)}
            >
                <div onClick={()=> setIsMobileMenuOpen(false)}>
                    <Close fontSize="large" />
                </div>
                <nav>
                    <Link href="/"><a>Lorem Ispum</a></Link>
                    <Link href="/"><a>Lorem Ispum</a></Link>
                    <Link href="/"><a>Lorem Ispum</a></Link>
                    <Link href="/"><a>Lorem Ispum</a></Link>
                </nav>
            </div>
            }

            

        </>
    )
}