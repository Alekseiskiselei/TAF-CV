const expect = require('chai').expect;
const petsController = require('../controller/petsController');
const getData = require('../../helpers/getData');
const { generateRandomPet } = require('../../helpers/strings');
const DATA_PROPERTIES = require('../../constants');
const postPetSchema = require('../schemas/post.pet.schema.json');
const getPetSchema = require('../schemas/get.pet.schema.json');
const postUpdatePetSchema = require('../schemas/post.update.pet.schema.json');
const putPetSchema = require('../schemas/put.pet.schema.json');
const deletePetSchema = require('../schemas/delete.pet.schema.json');
const statusSchema = require('../schemas/get.pet.by.status.schema.json');
const validateResponseByJsonSchema = require('../../helpers/validateSchema');

describe('Add new pet', function() {

  it('should add a new pet (POST)', async () => {
    const data = getData();
    const response = await petsController.addNewPet(data);
    const isResponseValid = validateResponseByJsonSchema(postPetSchema, response.data);
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal(data.name);
    expect(response.data.id).to.equal(data.id);
  });

});

describe('Pet', function () {
	let data;

	beforeEach(async () => {
		try {
			data = getData();
			await petsController.addNewPet(data);
		} catch (error) {
			throw new Error(`An error occured during creating a new pet: ${error}`);
		}
	});

  it('can be recieved by id (GET)', async () => {
    const response = await petsController.getPetById(data.id);
    const isResponseValid = validateResponseByJsonSchema(getPetSchema, response.data);
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(data.id);
    expect(response.data.name).to.equal(data.name);
  });
    
  it('should update a pet (POST)', async () => {
    const newData = {
      'name': generateRandomPet(),
      'status': DATA_PROPERTIES.STATUS
    };
    const response = await petsController.updatePet(data.id, newData);
    const isResponseValid = validateResponseByJsonSchema(postUpdatePetSchema, response.data);
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
  });
    
  it('should replace existing pet (PUT)', async () => {
    const newData = getData({id: data.id});
    const response = await petsController.replacePet(newData);
    const isResponseValid = validateResponseByJsonSchema(putPetSchema, response.data);
    expect(isResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(newData.id);
    expect(response.data.name).to.equal(newData.name);
  });
    
  it('should delete a pet (DELETE)', async () => {
    const response = await petsController.deletePetById(data.id);
    const getPetResponse = await petsController.getPetById(data.id);
    const isDeleteResponseValid = validateResponseByJsonSchema(deletePetSchema, response.data);
    expect(isDeleteResponseValid).to.equal(true);
    expect(response.status).to.equal(200);
    expect(getPetResponse.status).to.equal(404);
  });

	describe('Find pets by status', () => {

    it('Should find pets according certain status', async () => {
      const status = 'pending';
      const response = await petsController.getPetByStatus(status);
      const isValid = await validateResponseByJsonSchema(statusSchema, response.data);
      expect(response.status).to.equal(200);
      expect(isValid).to.equal(true);
      expect(response.data[1].status).to.equal(status);
	  });

  });
  
})