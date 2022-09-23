import { createContext, useContext, useMemo, useReducer } from 'react';
import { getBagCount } from './cart.helper';
import storeActions from './store/actions';
import cartReducer from './store/reducer';

const CartContext = createContext({});
const initialState = {
  bagCount: 0,
  isCartLoaded: false
};
 
export const CartProvider = ({ value, children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const reducerProps = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <CartContext.Provider value={{ ...reducerProps, ...value }}>
      {children}
    </CartContext.Provider>
  );
};
 
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used inside a CartProvider');
  }

  const { dispatch, ...state } = context;
 
  return { 
    ...state, 
    bagCount: getBagCount(state.cartItems), 
    ...storeActions(dispatch, state) 
  };
};