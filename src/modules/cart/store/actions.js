import {UPDATE_CART} from './actionTypes';
import { fetchCartData} from '../cart.helper';

const storeActions = (dispatch, state) =>{

    const getCart = async () =>{
        const data =  await fetchCartData();
   
        dispatch({
          type: UPDATE_CART,
          payload: data
        });
    }
    
    return { getCart};
}

export default storeActions;