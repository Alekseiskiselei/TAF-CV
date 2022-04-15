const LoginPage = require('../pageObjects/login.page');
const ProductsPage = require('../pageObjects/products.page');
const CheckoutInfoPage = require('../pageObjects/checkout.page');
const CheckoutOverviewPage = require('../pageObjects/checkout.overview.page');
const CheckoutCompletePage = require('../pageObjects/checkout.complete.page');
const CartPage = require('../pageObjects/cart.page');

const pages = new Map([
  ['Login', new LoginPage()],
  ['Products', new ProductsPage()],
  ['Cart', new CartPage()],
  ['Checkout information', new CheckoutInfoPage()],
  ['Checkout overview', new CheckoutOverviewPage()],
  ['Checkout complete', new CheckoutCompletePage()],
]);

const getPage = (page) => {
  if (pages.has(page)) {
    return pages.get(page);
  } else {
    throw new Error(`Couldn't find page ${page}`);
  }
};

module.exports = getPage;
