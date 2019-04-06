const fs = require('fs');
const router = require('express').Router();
const passport = require('passport');
const Profile = require('../db/models/Profile');

// ROUTE:   =>  /api/profile/create 
// METHOD:  =>  POST
// DESC:    =>  Create a new profile
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
    //TODO: => Create a new profile
});

// ROUTE:   =>  /api/profile/get/current 
// METHOD:  =>  GET
// DESC:    =>  Get current user's profile 
router.get('/get/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    //TODO: => Get current user's profile
});

// ROUTE:   =>  /api/profile/get/:id 
// METHOD:  =>  GET
// DESC:    =>  Get user's profile via ID
router.get('/get/:id', (req, res) => {
    //TODO: => Get user's profile via ID
});

// ROUTE:   =>  /api/profile/edit 
// METHOD:  =>  PUT
// DESC:    =>  Edit user's profile
router.put('/edit', passport.authenticate('jwt', { session: false }), (req, res) => {
    //TODO: => Edit user's profile
});

// ROUTE:   =>  /api/profile/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete user
router.delete('/delete', passport.authenticate('jwt', { session: false }), (req, res) => {
    //TODO: => Delete user
});


module.exports = router;