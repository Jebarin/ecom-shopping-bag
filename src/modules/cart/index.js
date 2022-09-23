import Header from '../../components/header';
import Cart from './cart';
import { CartProvider } from './cartContext';

/**
 * Cart Container
 * @returns 
 */
const CartContainer = () => {
    return (
        <CartProvider value={{
            showWishList: true
        }}>
            <Header />
            <Cart />
        </CartProvider>
    )
}

export default CartContainer;