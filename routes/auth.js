const router = require('express').Router();
const bcrypt = require('bcrypt');
const inputValidation = require('../utils/validateInput');
const User = require('../db/models/User');

// ROUTE:   =>  /auth/register 
// METHOD:  =>  POST
// DESC:    =>  Register a new user
router.post('/register', (req, res) => {
    //TODO: => Register a new user
    // Check if the provided input is valid
    const inputErrors = inputValidation.register(req.body);
    if(!inputErrors) {
        // If the function returns false, in regards of no errors being returned, proceed
        // Check if user exists via email
        User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if(!user) {
                // If there's no user, register a new one
                const { email, password } = req.body;
                // Hash the password
                bcrypt.hash(password, 10, (err, hash) => {
                    if(err) {
                        console.log(err);
                    } else {
                        const { email, password } = req.body;
                // Hash the password
                bcrypt.hash(password, 10, (err, hash) => {
                    if(err) {
                        console.log(err);
                    } else {
                        User.create({ email, password: hash })
                            .then(user => res.status(200).json(user))
                            .catch(err => res.status(500).json(err))
                    }
                })
                    }
                })
            } else {
                // Send an error message
                res.status(400).json({ error: "User already exists." });
            }
        })
        .catch(err => console.error(err));
    } else {
        // Otherwise, return a JSON object containing all the errors
        res.status(400).json(inputErrors);
    }
});

// ROUTE:   =>  /auth/login 
// METHOD:  =>  POST
// DESC:    =>  Log in 
router.post('/login', (req, res) => {
    //TODO: => Log in
});

// ROUTE:   =>  /auth/current 
// METHOD:  =>  POST
// DESC:    =>  Get current user
router.get('/current', (req, res) => {
    //TODO: => Get current user
});

// ROUTE:   =>  /auth/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete user
router.delete('/delete', (req, res) => {
    //TODO: => Delete user
});

module.exports = router;