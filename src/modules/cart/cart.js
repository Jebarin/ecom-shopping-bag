import CartItems from './cartItems/cartItems'; 
import WishList from './wishList';
import styles from './cart.module.scss';

/**
 * Cart
 * @returns 
 */
const Cart = () =>{
    return (
        <div className={styles['section']}>
            <section className={styles['section-left']}>
                <div className={styles['section-left-active']}>
                    <CartItems />
                </div>

                {showWishList &&
                    <div className={styles['section-left-wishlist']}>
                        <WishList />
                    </div>
                }
            </section>
            {/* <section className={styles['section-right']}>
                <h2>Order Summary</h2>
            </section> */}
        </div>
)
}

export default Cart;