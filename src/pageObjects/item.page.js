const BasePage = require('./base.page');

class ItemPage extends BasePage {
	get itemTitle() {
		return $('//div[@class="inventory_details_name large_size"]');
	}

	get addToCart() {
		return $('//button[contains(text(),"Add")]');
	}
}

module.exports = ItemPage;
