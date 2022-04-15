const {faker} = require('@faker-js/faker');
const randomstring = require('randomstring');


const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomZipcode = faker.address.zipCode();

function generateNumericString(length) {
    return randomstring.generate({
        length: length,
        charset: 'numeric'
    });
}

function generateRandomPet() {
    return `${faker.animal.type()} ${faker.name.firstName()}`;
}

module.exports = {
    randomFirstName,
    randomLastName,
    randomZipcode,
    generateNumericString,
    generateRandomPet
};
