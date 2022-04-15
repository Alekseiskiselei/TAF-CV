const BasePage = require('./base.page');

class CheckoutPage extends BasePage {
  constructor() {
    super();
  }

  get pageUrl() {
    return this.basePageUrl + 'checkout-step-one.html';
  }

  get ['Username field']() {
    return $('#first-name');
  }

  get ['Lastname field']() {
    return $('#last-name');
  }

  get ['Zipcode field']() {
    return $('#postal-code');
  }

  get ['Continue Button']() {
    return $('#continue');
  }

  get ['Cancel Button']() {
    return $('#cancel');
  }
}

module.exports = CheckoutPage;
