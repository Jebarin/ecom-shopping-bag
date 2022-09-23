
import {UPDATE_CART, REMOVE_ITEM, UPDATE_QUANTITY, MOVE_TO_WISHLIST, REMOVE_FROM_WISHLIST, DELETE_WISHLIST_ITEM} from './actionTypes'

const cartReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CART: {
      return { 
        ...state, 
        isCartLoaded: true,
        ...action.payload 
      };
    }
    case REMOVE_ITEM:
    case UPDATE_QUANTITY: {
      return { 
        ...state,
        cartItems: [
          ...action.payload 
        ]
      };
    }
    case REMOVE_FROM_WISHLIST:
    case MOVE_TO_WISHLIST: {
      return { 
        ...state,
        ...action.payload 
      };
    }
    case DELETE_WISHLIST_ITEM:{
      return { 
        ...state,
        savedList: [
          ...action.payload 
        ]
      };
    }
    default:
      return state;
  }
};

export default cartReducer;