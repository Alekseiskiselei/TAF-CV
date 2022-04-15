const http = require('./httpHandler');
const { petstoreBaseURL } = require('../../config/pet.baseURL');

class PetsController {
	getPetById(id) {
		return http.get(`${petstoreBaseURL}/pet/${id}`);
	}

	addNewPet(data) {
		return http.post(`${petstoreBaseURL}/pet/`, data);
	}

	replacePet(data) {
		return http.put(`${petstoreBaseURL}/pet/`, data);
	}

	updatePet(id, data) {
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
		};
		return http.post(`${petstoreBaseURL}/pet/${id}`, data, headers);
	}

	deletePetById(id) {
		return http.delete(`${petstoreBaseURL}/pet/${id}`);
	}

	getPetByStatus(status) {
		return http.get(`${petstoreBaseURL}/pet/findByStatus?status=${status}`);
	}
}

module.exports = new PetsController();
