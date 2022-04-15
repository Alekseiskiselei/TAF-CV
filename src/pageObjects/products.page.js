const BasePage = require('./base.page');

class ProductsPage extends BasePage {
  constructor() {
    super();
  }

  get pageUrl() {
    return this.basePageUrl + 'inventory.html';
  }

  get ['Product items title']() {
    return $$('.inventory_item_name');
  }

  get ['Dropdown active element']() {
    return $('.active_option');
  }

  get ['Backpack add to cart button']() {
    return $('#add-to-cart-sauce-labs-backpack');
  }

  get ['Backpack remove from cart button']() {
    return $('#remove-sauce-labs-backpack');
  }

  get ['Bike light add to cart button']() {
    return $('#add-to-cart-sauce-labs-bike-light');
  }

  get ['Fleece jacket add to cart button']() {
    return $('#add-to-cart-sauce-labs-fleece-jacket');
  }

  get ['Onesie add to cart button']() {
    return $('#add-to-cart-sauce-labs-onesie');
  }

  get ['Sorting dropdown menu']() {
    return $('.product_sort_container');
  }

  productItems(elementNumber) {
    return $(`.inventory_item:nth-child(${elementNumber || 1})`);
  }
}

module.exports = ProductsPage;
