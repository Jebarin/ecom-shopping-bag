import {UPDATE_CART, REMOVE_ITEM, UPDATE_QUANTITY} from './actionTypes';
import { fetchCartData, removeItemFromCart, updateCartQuantity} from '../cart.helper';

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

  const updateQuanity = (itemId, qty) => {
    const {cartItems} = state;
    const data = updateCartQuantity(cartItems, itemId, qty);

    dispatch({
      type: UPDATE_QUANTITY,
      payload: data
    });
  }
    
  return { 
    getCart,
    removeItem,
    updateQuanity
  };
}

export default storeActions;