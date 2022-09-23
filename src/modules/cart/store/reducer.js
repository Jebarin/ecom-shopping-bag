
import {UPDATE_CART, REMOVE_ITEM, UPDATE_QUANTITY} from './actionTypes'

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
    default:
      return state;
  }
};

export default cartReducer;