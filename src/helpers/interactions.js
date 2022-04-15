const { waitForElClickable } = require('./waiters');

const click = async (element) => {
  await waitForElClickable(element);
  await element.click();
};

const setValue = async (element, value) => {
  await element.setValue(value);
};

const getValue = async (element) => {
  await element.getText();
};

const getTitle = async () => {
  await browser.getTitle();
};

const getUrl = async () => {
  await browser.getUrl();
};

module.exports = {
  click,
  setValue,
  getValue,
  getUrl,
  getTitle,
};
