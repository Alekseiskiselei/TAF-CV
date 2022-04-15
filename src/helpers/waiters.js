const waitForElClickable = async (element) => {
  await element.waitForClickable({ timeout: 20000 });
};

module.exports = { waitForElClickable };
