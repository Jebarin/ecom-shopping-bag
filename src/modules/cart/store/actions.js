import {UPDATE_CART, REMOVE_ITEM} from './actionTypes';
import { fetchCartData, removeItemFromCart} from '../cart.helper';

const storeActions = (dispatch, state) =>{

    const getCart = async () =>{
        const data =  await fetchCartData();
   
        dispatch({
          type: UPDATE_CART,
          payload: data
        });
    }

    const removeItem = (itemId) => {
      const {cartItems} = state;
      const data = removeItemFromCart(cartItems, itemId);
  
      dispatch({
        type: REMOVE_ITEM,
        payload: data
      });
  }
    
    return { 
      getCart,
      removeItem
    };
}

export default storeActions;