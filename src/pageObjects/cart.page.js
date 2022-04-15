const BasePage = require('./base.page');
const CartItem = require('../components/cart.item.component');

class CartPage extends BasePage {
  constructor() {
    super();
    this.cartItem = new CartItem();
  }

  get pageUrl() {
    return this.basePageUrl + 'cart.html';
  }
  
  get ['Checkout button']() {
    return $('#checkout');
  }
}

module.exports = CartPage;
