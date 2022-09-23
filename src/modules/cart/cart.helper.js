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

export const getBagCount = (items = []) =>{
    let qty = 0;
    items.forEach((item)=>  qty += item.quantity)

    return qty;
}

export const removeItemFromCart = (items = [], itemId) =>{
    return items?.filter((item) => item.itemId !== itemId);
}