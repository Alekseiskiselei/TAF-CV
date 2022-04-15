const HTTP = require('./httpHandler');
const {petstoreBaseURL} = require('../../config/pet.baseURL');

class UserController {
    createNewUser(data) {
        return HTTP.post(`${petstoreBaseURL}/user`, data);
    }

    getUserByUserName(user) {
        return HTTP.get(`${petstoreBaseURL}/user/${user}`);
    }

    async updateUserInfo(username, updateData) {
        const user = await this.getUserByUserName(username);
        const newData = Object.assign(user.data, updateData);
        return HTTP.put(`${petstoreBaseURL}/user/${username}`, newData);
    }

    deleteUser(username) {
        return HTTP.delete(`${petstoreBaseURL}/user/${username}`);
    }

    createUsersWithArray(array) {
        return HTTP.post(`${petstoreBaseURL}/user/createWithArray`, array);
    }
}

module.exports = UserController;