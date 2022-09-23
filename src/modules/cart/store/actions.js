import {UPDATE_CART, REMOVE_ITEM, UPDATE_QUANTITY, MOVE_TO_WISHLIST, REMOVE_FROM_WISHLIST, DELETE_WISHLIST_ITEM} from './actionTypes';
import { fetchCartData, removeItemFromCart, updateCartQuantity, moveItemToWishList, removeItemFromWishList} from '../cart.helper';

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

  const moveToWishList = (itemId) => {
    const {cartItems, savedList} = state;
    const data = moveItemToWishList(cartItems, savedList, itemId);

    dispatch({
      type: MOVE_TO_WISHLIST,
      payload: data
    });
  }

  const removeFromWishList = (itemId) => {
    const {cartItems, savedList} = state;
    const data = removeItemFromWishList(cartItems, savedList, itemId);

    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: data
    });
  }

  const deleteWishListItem = (itemId) => {
      const { savedList} = state;
      const data = removeItemFromCart(savedList, itemId);

      dispatch({
        type: DELETE_WISHLIST_ITEM,
        payload: data
      });
  }
    
  return { 
    getCart,
    removeItem,
    updateQuanity,
    moveToWishList,
    removeFromWishList,
    deleteWishListItem
  };
}

export default storeActions;