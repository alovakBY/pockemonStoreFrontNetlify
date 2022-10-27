import api from "../api/config";

class CartService {
  static instance = new CartService();

  getCartItems() {
    return api.get(`/cart`);
  }

  setCartItem({ id, name, image, price, quantity }) {
    return api.post(`/.netlify/functions/server/cart/item`, {
      id,
      name,
      image,
      quantity,
      price,
    });
  }

  updateCartItem({ id, quantity }) {
    return api.patch(`/.netlify/functions/server/cart/item`, {
      id,
      quantity,
    });
  }

  deleteCartItem({ id }) {
    return api.delete(`/.netlify/functions/server/cart/item/${id}`);
  }
}

export default CartService.instance;
