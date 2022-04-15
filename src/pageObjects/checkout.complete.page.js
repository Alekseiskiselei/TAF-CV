const BasePage = require('./base.page');

class CheckoutCompletePage extends BasePage {
  constructor() {
    super();
  }

  get pageUrl() {
    return this.basePageUrl + 'checkout-complete.html';
  }

    get ['Back home button']() {
        return $('#back-to-products');
    }
}

module.exports = CheckoutCompletePage;
