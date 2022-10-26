import api from "../api/config";

class OrderService {
  static instance = new OrderService();

  getOrders() {
    return api.get(`/.netlify/functions/server/order`);
  }

  setOrders({ customerId, totalPrice, itemsList }) {
    return api.post(`/.netlify/functions/server/order`, {
      customerId,
      totalPrice,
      itemsList,
    });
  }
}

export default OrderService.instance;
