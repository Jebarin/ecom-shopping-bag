import { removeItemFromCart } from '../cart.helper';

const cartData = {
  "cartItems": [
    {
      "itemId": "7d0f8",
      "itemName": "Mens jeans",
    },
    {
      "itemId": "68afe",
      "itemName": "Shirt",
    },
  ],
  "savedList": [
    {
        "itemId": "667f",
        "itemName": "Watches",
        "quantity": 1,
        "salesPrice": 10.95,
        "itemImage": "https://via.placeholder.com/150"
    }
  ]
} 

test('remove item', () => {
  const cartItems = [{...cartData.cartItems[0]}];

  const res = removeItemFromCart(cartItems, cartItems[0]['itemId'])
  expect(res.length).toEqual(0);
});
 