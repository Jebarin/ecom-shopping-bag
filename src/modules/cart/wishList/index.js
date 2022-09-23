
import LineItem from '../../../components/lineItem';
import { useCartContext } from '../cartContext';

/**
 * Wish List
 * @returns 
 */
const WishList = () =>{
    const {savedList, isCartLoaded } = useCartContext(); 

    if(!isCartLoaded || savedList?.length ===0) return null;

    return (
        <>
            <h2>Saved For Later Items ({savedList.length})</h2>
            {savedList.map((item)=>(
                <LineItem  key={item.itemId} {...item}  qtyReadOnly={true} />
            ))}
            
        </>
    )
}

export default WishList;