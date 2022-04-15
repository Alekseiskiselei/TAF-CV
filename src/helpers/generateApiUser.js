const {faker} = require('@faker-js/faker');

const generateApiUser = () => {
    return {
        'id': faker.datatype.number({min: 100, max: 1e3}),
        'lastName': faker.name.lastName(),
        'firstName': faker.name.firstName(),
        'username': faker.internet.userName(),
        'email': faker.internet.email(this.firstName, this.lastName),
        'password': faker.internet.password(),
        'phone': faker.phone.phoneNumber(),
        'userStatus': faker.datatype.number({min: 0, max: 10})
    };
};

module.exports = generateApiUser;