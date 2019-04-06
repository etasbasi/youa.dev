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
    // If the function returns false, in regards of no errors being returned, proceed
    if(!inputErrors) {
        const { email, password } = req.body;
        // Check if user exists via email
        User.findOne({ where: { email } })
        .then(user => {
            if(!user) {
                // If there's no user, register a new one
                // Hash the password
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Save the user in the database
                        User.create({
                                email,
                                password: hash
                            })
                            .then(user => res.status(200).json(user))
                            .catch(err => res.status(500).json(err))
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
    // Check for input errors
    const inputErrors = inputValidation.login(req.body);
    // If no errors, proceed
    if(!inputErrors) {
        const { email, password } = req.body;
        // Check if user exists within the database
        User.findOne({ where: { email } })
            .then(user => {
                // Send error message if there's no user
                if(!user) {
                    res.status(404).json({ error: 'User not found.' })
                } else {
                    // Compare provided password with the hash
                    bcrypt.compare(password, user.password, (err, match) => {
                        if(err) {
                            // Log the error if there's an error
                            console.error(err);
                        } else {
                            // If no match, send an error
                            if(!match) {
                                res.status(400).json({ error: 'Invalid password.' });
                            } else {
                                //TODO: => Send an authorization token
                                res.status(200).json({ loggedIn: match });
                            }
                        }
                    })
                }
            })
    } else {
        // Return input errors
        res.status(400).json(inputErrors);
    }
    // Check if user exists

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