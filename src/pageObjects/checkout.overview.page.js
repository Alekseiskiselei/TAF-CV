const BasePage = require('./base.page');

class CheckoutOverviewPage extends BasePage {
	constructor() {
		super();
	}

	get pageUrl() {
		return this.basePageUrl + 'checkout-step-two.html';
	}

	get ['Finish button']() {
		return $('#finish');
	}

	get ['Item total price']() {
		return $('//*[contains(text(),"Item total")]');
	}
}

module.exports = CheckoutOverviewPage;
