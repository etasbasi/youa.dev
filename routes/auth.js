const router = require('express').Router();

// ROUTE:   =>  /auth/register 
// METHOD:  =>  POST
// DESC:    =>  Register a new user
router.post('/register', (req, res) => {
    //TODO: => Register a new user
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