import { getBagCount, moveItemToWishList, removeItemFromCart, updateCartQuantity } from '../cart.helper';

const cartData = {
  "cartItems": [
    {
      "itemId": "7d0f8",
      "itemName": "Mens jeans",
      "quantity": 3,
    },
  ],
  "savedList": [
    {
        "itemId": "667f",
        "itemName": "Watches",
        "quantity": 1,
    }
  ]
} 

test('remove item', () => {
  const cartItems = [{...cartData.cartItems[0]}];
  const res = removeItemFromCart(cartItems, cartItems[0]['itemId']);

  expect(res.length).toEqual(0);
});
 
test('update quanity', () => {
  const cartItems = [{...cartData.cartItems[0]}];
  const res = updateCartQuantity(cartItems, cartItems[0]['itemId'], 5);

  expect(res[0]['quantity']).toEqual(5);
});

test('get bag count', () => {
  const cartItems = [...cartData.cartItems];
  const res = getBagCount(cartItems);

  expect(res).toEqual(3);
});

test('move to wishlist', () => {
  const cart = {...cartData};
  const res = moveItemToWishList(cart.cartItems, cart.savedList, cart.cartItems[0]["itemId"]);

  expect(res.cartItems.length).toEqual(0);
  expect(res.savedList.length).toEqual(2);
})