const { generateNumericString, generateRandomPet } = require('../helpers/strings');

function getData({id, name, status} = {}) {
  return {
    'id': id || Number(generateNumericString(3)),
    'category': {
      'id': 0,
      'name': 'string'
    },
    'name': name || generateRandomPet(),
    'photoUrls': [
      'string'
    ],
    'tags': [
      {
        'id': 0,
        'name': 'string'
      }
    ],
    'status': status || 'available'
  };
}

module.exports = getData;