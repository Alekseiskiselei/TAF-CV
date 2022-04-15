const HTTP = require('./httpHandler');
const { petstoreBaseURL } = require('../../config/pet.baseURL');

class StoreController {
  getStoreInventory() {
    return HTTP.get(`${petstoreBaseURL}/store/inventory`);
  }

  getOrderById(orderId) {
    return HTTP.get(`${petstoreBaseURL}/store/order/${orderId}`);
  }

  createPetOrder(orderData) {
    return HTTP.post(`${petstoreBaseURL}/store/order`, orderData);
  }

  deleteOrder(orderId) {
    return HTTP.delete(`${petstoreBaseURL}/store/order/${orderId}`);
  }

  async updateOrder(orderID, orderData) {
    const order = await this.getUserByUserName(orderID);
    const newData = Object.assign(order.data, orderData);
    return HTTP.put(`${petstoreBaseURL}/user/${orderID}`, newData);
  }
  
}

module.exports = StoreController;
