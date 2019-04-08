const validator = require('validator');

class validateInput {
    constructor() {
        this.errors = {}
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.post = this.post.bind(this);
        this.password = this.password.bind(this);
    }
    login(data) {
        this.errors = {};
        if (validator.isEmpty(data.email)) {
            this.errors.emailEmpty = 'Please provide an email address.';
        }
        if (!validator.isEmail(data.email)) {
            this.errors.invalidEmail = 'Please provide a valid email address.';
        }
        if (validator.isEmpty(data.password)) {
            this.errors.passwordEmpty = 'Please provide a password.';
        }
        if (Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
    register(data) {
        this.errors = {};
        if (validator.isEmpty(data.email)) {
            this.errors.emailEmpty = "Please provide an email address.";
        }
        if (!validator.isEmail(data.email)) {
            this.errors.invalidEmail = "Please provide a valid email address.";
        }
        if (validator.isEmpty(data.password)) {
            this.errors.passwordEmpty = "Please provide a password.";
        }
        if (!validator.isLength(data.password, {
                min: 8,
                max: 32
            })) {
            this.errors.passwordLength = "Your password should be between 8 and 32 characters long.";
        }
        if (data.password !== data.confirmPassword) {
            this.errors.passwordsNotMatching = "Passwords are not matching.";
        }
        if (Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
    profile(data) {
        this.errors = {};
        if (validator.isEmpty(data.firstName)) {
            this.errors.firstNameEmpty = 'First name is required.';
        }
        if (validator.isEmpty(data.lastName)) {
            this.errors.lastNameEmpty = 'Last name is required.';
        }
        if (Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
    post(data) {
        this.errors = {};
        if (validator.isEmpty(data.title)) {
            this.errors.titleEmpty = 'Post title is required.';
        }
        if (validator.isEmpty(data.body)) {
            this.errors.bodyEmpty = 'Post body is required.';
        }
        if (Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
    comment(data) {
        this.errors = {};
        if (validator.isEmpty(data.body)) {
            this.errors.commentEmpty = 'Empty comments are not allowed.';
        }
        if (!validator.isLength(data.body, {
                min: 3,
                max: 200
            })) {
            this.errors.commentLength = 'Comments should be between 3 and 200 characters long.';
        }
        if (Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
    password(data) {
        this.errors = {};
        if (validator.isEmpty(data.password)) {
            this.errors.passwordEmpty = "Please provide a password.";
        }
        if (!validator.isLength(data.password, {
                min: 8,
                max: 32
            })) {
            this.errors.passwordLength = "Your password should be between 8 and 32 characters long.";
        }
        if (data.password !== data.confirmPassword) {
            this.errors.passwordsNotMatching = "Passwords are not matching.";
        }
        if (Reflect.ownKeys(this.errors).length > 0) {
            return this.errors;
        } else {
            return false;
        }
    }
};

const inputValidation = new validateInput();
module.exports = inputValidation;