const validator = require('validator');

class validateInput {
    constructor() {
        this.errors = {}
        this.login = this.login.bind(this);
    }
    login(data) {
        if(validator.isEmpty(data.email)) {
            this.errors.emailEmpty = 'Please provide an email address.';
        }
        if(!validator.isEmail(data.email)) {
            this.errors.invalidEmail = 'Please provide a valid email address.';
        }
        if(validator.isEmpty(data.password)) {
            this.errors.passwordEmpty = 'Please provide a password.';
        }
        if(Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return true;
        }
    }
};

module.exports = validateInput;