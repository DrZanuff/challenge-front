import { useState , useEffect } from 'react';
import { Search , Person , ShoppingCart , Menu , Close} from '@material-ui/icons';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
    const minDesktopSize = 1280;

    const [isDesktop, setDesktop] = useState(true);
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);
    const [selectedIcon , setSelectedIcon ] = useState(
        { search : false , user : false , cart : false }
    )

    function handleIconSelect(icon : 'search' | 'user' | 'cart') {
        let newSelectedIcon = {...selectedIcon}

        let i : keyof typeof newSelectedIcon
        for ( i in newSelectedIcon){
            newSelectedIcon[i] = false;
        }
        newSelectedIcon[icon] = true;

        setSelectedIcon(newSelectedIcon);
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
                        <div 
                        className={selectedIcon.search ? styles.active : ''}
                        onClick={ () => handleIconSelect('search')}
                        >
                            <Search fontSize="small"></Search>
                            <span></span>
                        </div>

                        <div 
                        className={selectedIcon.user ? styles.active : ''}
                        onClick={ () => handleIconSelect('user')}
                        >
                            <Person fontSize="small"></Person>
                            <span></span>
                        </div>

                        <div 
                        className={selectedIcon.cart ? styles.active : ''}
                        onClick={ () => handleIconSelect('cart')}
                        >
                            <ShoppingCart fontSize="small" ></ShoppingCart>
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