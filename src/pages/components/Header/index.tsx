import { useState , useEffect } from 'react';
import { Search , Person , ShoppingCart , Menu , Close} from '@material-ui/icons';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
    const minDesktopSize = 1280;

    const [isDesktop, setDesktop] = useState(true);
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);

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
                        <Search fontSize="small"></Search>
                        <Person fontSize="small"></Person>
                        <ShoppingCart fontSize="small"></ShoppingCart>
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