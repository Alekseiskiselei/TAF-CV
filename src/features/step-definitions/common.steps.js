const { When, Then } = require('@cucumber/cucumber');
const { getListItemsText, getElement } = require('../../helpers/helpers');
const getPage = require('../../factory/page.factory');
const {
  click,
  setValue,
  getValue,
  getUrl,
  getTitle,
} = require('../../helpers/interactions');
const { sortProductItems } = require('../../helpers/sortings');
const {
  randomFirstName,
  randomLastName,
  randomZipcode,
} = require('../../helpers/strings');

When(/^I open '([^"]+)' url$/, async (url) => {
  await browser.url(url);
});

Then(
  /^I enter '([^"]+)' in '([^"]+)' input on '([^"]+)' page$/,
  async function (text, inputName, page) {
    const currentPage = getPage(page);
    const currentInput = currentPage[inputName];
    await setValue(currentInput, text);
  }
);

Then(
  /^I enter random data '(random First Name|random Last Name|random Zipcode)' in '([^"]+)' input on '([^"]+)' page$/,
  async function (textType, inputName, page) {
    const currentPage = getPage(page);
    let value;
    switch (textType) {
      case 'random First Name':
        value = randomFirstName;
        break;
      case 'random Last Name':
        value = randomLastName;
        break;
      case 'random Zipcode':
        value = randomZipcode;
        break;
    }
    const currentInput = currentPage[inputName];
    await setValue(currentInput, value);
  }
);

Then(/^I see '([^"]+)' page url$/, async (page) => {
  const currentPage = getPage(page);
  const currentUrl = currentPage.pageUrl;
  await expect(browser).toHaveUrl(currentUrl);
});

Then(/^I see '([^"]+)' url$/, async (url) => {
  await browser.switchWindow(url);
  await expect(browser).toHaveUrl(url);
});

When(
  /^I see '([^"]+)' element on '([^"]+)' page( in '([^"]+)' component)?$/,
  async (element, page, component) => {
    const currentPage = getPage(page);
    let currentElement = getElement(currentPage, element, component);
    await expect(currentElement).toBeDisplayed();
  }
);

When(
  /^I click '([^"]+)' on '([^"]+)' page( in '([^"]+)' component)?$/,
  async (button, page, component) => {
    const currentPage = getPage(page);
    const currentElement = getElement(currentPage, button, component);
    await click(currentElement);
  }
);

When(
  /^I click on '([^"]+)' element in '([^"]+)' dropdown on '([^"]+)' page( in '([^"]+)' component)?$/,
  async (dropdownElName, dropdown, page, component) => {
    const currentPage = getPage(page);
    const currentDropdown = getElement(currentPage, dropdown, component);
    await click(currentDropdown);
    await currentDropdown.selectByVisibleText(dropdownElName);
  }
);

Then(
  /^I see '([^"]+)' changed text on '([^"]+)' on '([^"]+)' page$/,
  async (element, text, page) => {
    const currentPage = getPage(page);
    const activeElement = currentPage[element];
    const currentText = await activeElement.getText();
    await expect(currentText).toEqual(text);
  }
);

Then(
  /^I see '([^"]+)' sorter by '([^"]+)' on '([^"]+)' page$/,
  async (items, sortingKey, page) => {
    const currentPage = getPage(page);
    const itemsTitleList = await getListItemsText(currentPage[items]);
    const expectedTitleList = await getListItemsText(currentPage[items]);
    await sortProductItems(sortingKey, expectedTitleList);
    await expect(itemsTitleList).toEqual(expectedTitleList);
  }
);

When(
  /^I select '([^"]+)' option in '([^"]+)' list on '([^"]+)' page$/,
  async (optionText, dropdown, page) => {
    const currentPage = getPage(page);
    const currentDropdown = await currentPage[dropdown];
    const dropdownOptions = await currentDropdown.$$('option');
    await currentPage.selectOptionByText(optionText, dropdownOptions);
  }
);

Then(
	/^I don't see '([^"]+)' element on '([^"]+)' page( in '([^"]+)' component)?$/, 
	async (element, page, component) => {
	  const currentPage = getPage(page);
	  const currentElement = getElement(currentPage, element, component);
	  await expect(currentElement).not.toBeDisplayed();
	}
);
Then(/^I compare '([^"]+)' with '([^"]+)' on '([^"]+)' page$/,
	async (firstElement, secondElement, page) => {
    const currentPage = getPage(page);
    const currentElement = getElement(currentPage, firstElement);
    const currentValue = await currentElement.getText();
    await expect(currentValue).toEqual(secondElement);
	}); 
