import { useCartContext } from '../../modules/cart/cartContext';
import styles from './header.module.scss';

const Header = () =>{
    const {bagCount} = useCartContext();
    
    return (
        <header className={styles['header']}>
            <img src='https://via.placeholder.com/150x65' alt="logo"/> 
            <div className={styles['header-bag-count']}>
                <svg enableBackground="new 0 0 40 36" height="36" viewBox="0 0 40 36" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m94.5 434.6h24.8l4.7-15.7h-31.8l-1.3-8.9h-6.9v4.8h3.1l3.7 27.8h.1c0 1.9 1.8 3.4 3.9 3.4 2.2 0 3.9-1.5 3.9-3.4h12.8c0 1.9 1.8 3.4 3.9 3.4 2.2 0 3.9-1.5 3.9-3.4h1.7v-3.9l-25.8-.1z" transform="translate(-84 -410)"/></svg>
                <span>{bagCount}</span>
            </div>
        </header>
    )
}

export default Header;