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

export const updateCartQuantity = (items = [], itemId, qty) =>{
    return items?.map((item) => {
        if(item.itemId === itemId) item.quantity = qty;
        return item;
    });
}

export const moveItemToWishList = (cartItems = [], savedList = [], itemId) =>{
    const updatedSavedList = [...savedList];

    const updatedCartItems  = cartItems?.map((item) => {
        if(item.itemId === itemId){
            updatedSavedList.push(item);
            return null;
        }
        
        return item;
    }).filter(Boolean);

    return {
        cartItems: updatedCartItems,
        savedList: updatedSavedList
    }
}
