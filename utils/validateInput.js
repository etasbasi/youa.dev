const validator = require('validator');

class validateInput {
    constructor() {
        this.errors = {}
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }
    login(data) {
        this.errors = {};
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
            return false;
        }
    }
    register(data) {
        this.errors = {};
        if(validator.isEmpty(data.email)) {
            this.errors.emailEmpty = "Please provide an email address.";
        }
        if(!validator.isEmail(data.email)) {
            this.errors.invalidEmail = "Please provide a valid email address.";
        }
        if(validator.isEmpty(data.password)) {
            this.errors.passwordEmpty = "Please provide a password.";
        }
        if(!validator.isLength(data.password, { min: 8, max: 32 })) {
            this.errors.passwordLength = "Your password should be between 8 and 32 characters long.";
        }
        if(data.password !== data.confirmPassword) {
            this.errors.passwordsNotMatching = "Passwords are not matching.";
        }
        if(Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
};

const inputValidation = new validateInput();
module.exports = inputValidation;
