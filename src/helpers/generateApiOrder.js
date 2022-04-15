const { faker } = require('@faker-js/faker');

const generateApiOrder = () => {
  return {
    id: faker.datatype.number({ min: 100, max: 10000 }),
    petId: faker.datatype.number({ min: 100, max: 1e3 }),
    quantity: faker.datatype.number({ min: 1, max: 10 }),
    shipDate: faker.date.between(
      '2021-12-01T00:00:00.000Z',
      new Date().toISOString()
    ),
    status: 'placed',
    complete: faker.datatype.boolean(),
  };
};

module.exports = generateApiOrder;
