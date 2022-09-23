import LineItem from '../../../components/lineItem';
import { useCartContext } from '../cartContext';

/**
 * Cart Items
 * @returns 
 */
const CartItems = () =>{
    const {cartItems, bagCount, isCartLoaded, removeItem, updateQuanity} = useCartContext();

    return (
        <>
            {isCartLoaded && cartItems?.length === 0 && (
                <h3>Your Shopping Bag is empty</h3>
            )}

            {isCartLoaded && cartItems?.length > 0 && (
                <>
                    <h1>Active Items ({bagCount})</h1>
                    {
                        cartItems.map((item)=> (
                            <LineItem key={item.itemId} onRemoveItem={removeItem}  onQuantityUpdate={updateQuanity}  {...item} />
                        ))
                    }
                </>
            )}
        </>
    )
}

export default CartItems;