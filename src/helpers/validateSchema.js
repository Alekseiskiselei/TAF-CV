const Ajv = require('ajv');
const ajv = new Ajv();

const validateResponseByJsonSchema = (schema, object) => {
    const validate = ajv.compile(schema);
    const isValid = validate(object);

    if (isValid) {
        return isValid;
    } else {
        throw new Error(JSON.stringify(validate.errors, null, 2));
    } 
};

module.exports = validateResponseByJsonSchema;


