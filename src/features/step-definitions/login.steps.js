const { When, Then } = require('@cucumber/cucumber');
const getPage = require('../../factory/page.factory');
require('dotenv').config();
const {
  click,
  setValue,
  getValue,
  getUrl,
  getTitle,
} = require('../../helpers/interactions');
const password = process.env.PASSWORD;
const standartUserName = process.env.STANDARD_USER;
const lockedUserName = process.env.LOCKED_USER;
const problemUserName = process.env.PROBLEM_USER;
const glitchUserName = process.env.GLITCH_USER;

When(/^I login as '([^"]+)' user$/, async (user) => {
  const loginPage = getPage('Login');
  let userName;
  switch (user) {
    case 'Standard':
      userName = standartUserName;
      break;
    case 'Locked':
      userName = lockedUserName;
      break;
    case 'Problem':
      userName = problemUserName;
      break;
    case 'Glitch':
      userName = glitchUserName;
      break;
    default:
      throw new Error(`Incorrect user ${user}`);
  }
  await loginPage.loginUser(userName, password);
});
