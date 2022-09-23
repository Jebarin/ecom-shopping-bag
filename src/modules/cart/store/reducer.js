
import {UPDATE_CART} from './actionTypes'

const cartReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CART: {
      return { 
        ...state, 
        isCartLoaded: true,
        ...action.payload 
      };
    }
    default:
      return state;
  }
};

export default cartReducer;