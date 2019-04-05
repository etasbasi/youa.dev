const validator = require('validator');

const validateInput = {
    errors: {},
    login(data) {
        if(validator.isEmpty(data.email)) {
            errors.emailEmpty = 'Please provide an email address.';
        }
        if(!validator.isEmail(data.email)) {
            errors.invalidEmail = 'Please provide a valid email address.';
        }
        if(validator.isEmpty(data.password)) {
            errors.passwordEmpty = 'Please provide a password.';
        }
        if(Reflect.ownKeys(errors).length > 0) {
            return errors;
        } else {
            return true;
        }
    }
};

module.exports = validateInput;