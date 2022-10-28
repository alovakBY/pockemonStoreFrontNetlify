import api from "../api/config";

class CartService {
  static instance = new CartService();

  getCartItems() {
    return api.get(`/.netlify/functions/server/cart`);
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
    return api.patch(`/cart/item`, {
      id,
      quantity,
    });
  }

  deleteCartItem({ id }) {
    return api.delete(`/cart/item/${id}`);
  }
}

export default CartService.instance;
