const Footer = require('../components/footer.component');
const Header = require('../components/header.component');
const Menu = require('../components/menu.component');
const CartItem = require('../components/cart.item.component');

class BasePage {
  constructor() {
    this.basePageUrl = 'https://www.saucedemo.com/';
    this['Header'] = new Header();
    this['Footer'] = new Footer();
    this['Menu'] = new Menu();
    this['Cart item'] = new CartItem();
  }

  getComponent(component) {
    if (this[component]) {
      return this[component];
    } else {
      throw new Error(
        `Component ${component} not found on ${this.constructor.name} page`
      );
    }
  }

  async open(pageUrl) {
    await browser.url(pageUrl);
    await browser.maximizeWindow();
  }

  async getPageUrl() {
    await browser.getUrl();
  }

  async selectOptionByText(text, arrayOfOptions) {
    for (const element of arrayOfOptions) {
      const elementText = await element.getText();
      if (elementText === text) {
        await element.click();
      }
    }
  }
}

module.exports = BasePage;
