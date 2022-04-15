const UserController = require('../controller/user.controller');
const { expect } = require('chai');
const generateApiUser = require('../../helpers/generateApiUser');
const postSchema = require('../schemas/post.user.schema.json');
const getSchema = require('../schemas/get.user.schema.json');
const putSchema = require('../schemas/put.user.schema.json');
const deleteSchema = require('../schemas/delete.user.schema.json');
const postUsersArraySchema = require('../schemas/post.user.with.array.schema.json');
const validateResponseByJsonSchema = require('../../helpers/validateSchema');

describe('User controller testing', () => {
	const userController = new UserController();
	const user = generateApiUser();
	const userUpdate = { phone: generateApiUser().phone };

	describe('POST request testing:', () => {
		it('Should create new user', async () => {
			const postResponse = await userController.createNewUser(user);
			const isResponseValid = validateResponseByJsonSchema(postSchema, postResponse.data);

			expect(isResponseValid).to.equal(true);
			expect(postResponse.status).to.equal(200);
			expect(postResponse.data.message).to.equal(`${user.id}`);
		});

		after(async () => {
			await userController.deleteUser(user.username);
		});
	});

	describe('POST list of users', () => {
		it('Should create list of users with given input array', async () => {
			const arrayOfUsers = [user, user, user];
			const response = await userController.createUsersWithArray(arrayOfUsers);
			const isValid = await validateResponseByJsonSchema(postUsersArraySchema, response.data);
			expect(response.status).to.equal(200);
			expect(isValid).to.equal(true);
		});
	});

	describe('GET, PUT, DELETE requests testing:', () => {
		before(async () => {
			await userController.createNewUser(user);
		});

		it('Should get user by username (GET)', async () => {
			const getResponse = await userController.getUserByUserName(user.username);
			const isResponseValid = validateResponseByJsonSchema(getSchema, getResponse.data);

			expect(isResponseValid).to.equal(true);
			expect(getResponse.status).to.equal(200);
			expect(getResponse.data.username).to.equal(user.username);
		});

		it('Should update user info (PUT)', async () => {
			const updateResponse = await userController.updateUserInfo(user.username, userUpdate);
			const getResponse = await userController.getUserByUserName(user.username);
			const isUpdateResponseValid = validateResponseByJsonSchema(putSchema, updateResponse.data);

			expect(isUpdateResponseValid).to.equal(true);
			expect(updateResponse.data.code).to.equal(200);
			expect(getResponse.data.phone).to.equal(userUpdate.phone);
		});

		it('Should delete user by username (DELETE)', async () => {
			const deleteResponse = await userController.deleteUser(user.username);
			const getUserResponse = await userController.getUserByUserName(user.username);
			const isDeleteResponseValid = validateResponseByJsonSchema(deleteSchema, deleteResponse.data);

			expect(isDeleteResponseValid).to.equal(true);
			expect(deleteResponse.status).to.equal(200);
			expect(getUserResponse.status).to.equal(404);
		});
	});
});
