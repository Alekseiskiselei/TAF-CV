const StoreService = require('../controller/storeController');
const UserService = require('../controller/user.controller');
const { expect } = require('chai');
const generateApiOrder = require('../../helpers/generateApiOrder');
const generateApiUser = require('../../helpers/generateApiUser');
const postOrderSchema = require('../schemas/post.order.schema.json');
const getOrderSchema = require('../schemas/get.order.schema.json');
const deleteOrderSchema = require('../schemas/delete.order.schema.json');
const postUserSchema = require('../schemas/post.user.schema.json');
const putUserSchema = require('../schemas/put.user.schema.json');
const validateResponseByJsonSchema = require('../../helpers/validateSchema');

describe('Store controller testing', () => {
  const storeController = new StoreService();
  const order = generateApiOrder();

  beforeEach(async () => {
    const response = await storeController.createPetOrder(order);
    const isResponseValid = validateResponseByJsonSchema(
      postOrderSchema,
      response.data
    );
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    response.data.shipDate = new Date(response.data.shipDate);
    expect(response.data).to.deep.equal(order);
  });

  it('should get order by order id', async () => {
    const response = await storeController.getOrderById(order.id);
    const isResponseValid = validateResponseByJsonSchema(
      getOrderSchema,
      response.data
    );
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(order.id);
  });

  it('should delete order by order id', async () => {
    const response = await storeController.deleteOrder(order.id);
    const isResponseValid = validateResponseByJsonSchema(
      deleteOrderSchema,
      response.data
    );
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    const responseDeletedOrder = await storeController.getOrderById(order.id);
    expect(responseDeletedOrder.status).to.equal(404);
  });
});

describe('user controller testing', () => {
  const userController = new UserService();
  const user = generateApiUser();
  const userName = { firstName: generateApiUser().firstName };

  beforeEach(async function () {
    const response = await userController.createNewUser(user);
    const isResponseValid = validateResponseByJsonSchema(
      postUserSchema,
      response.data
    );
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    expect(response.data.message).to.equal(`${user.id}`);
  });

  it('should update user info ', async () => {
    const updateResponse = await userController.updateUserInfo(
      user.username,
      userName
    );
    const getResponse = await userController.getUserByUserName(user.username);
    const isResponseValid = validateResponseByJsonSchema(
      putUserSchema,
      updateResponse.data
    );
    expect(isResponseValid).to.equal(true);
    expect(updateResponse.status).to.equal(200);
    expect(getResponse.data.firstName).to.equal(userName.firstName);
  });
});
