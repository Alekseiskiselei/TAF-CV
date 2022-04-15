const BasePage = require('./base.page');
const { click, setValue } = require('../helpers/interactions');

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  get pageUrl() {
    return this.basePageUrl;
  }

  get ['Username field']() {
    return $('[placeholder="Username"]');
  }

  get ['Password field']() {
    return $('[placeholder="Password"]');
  }

  get ['Login button']() {
    return $('.submit-button');
  }

  async loginUser(username, password) {
    await setValue(this['Username field'], username);
    await setValue(this['Password field'], password);
    await click(this['Login button']);
  }
}

module.exports = LoginPage;
