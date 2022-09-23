import {CART_API_ENDPOINT} from '../../configs'

export const fetchCartData = async () => {
    let response;

    try{
        response = await fetch(CART_API_ENDPOINT);
    }catch(err){
        console.error(err);
    }
    
    return response?.json?.();
}
