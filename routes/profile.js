const fs = require('fs');
const router = require('express').Router();
const Profile = require('../db/models/Profile');

// ROUTE:   =>  /profile/create 
// METHOD:  =>  POST
// DESC:    =>  Create a new profile
router.post('/create', (req, res) => {
    //TODO: => Create a new profile
});

// ROUTE:   =>  /profile/get/current 
// METHOD:  =>  GET
// DESC:    =>  Get current user's profile 
router.get('/get/current', (req, res) => {
    //TODO: => Get current user's profile
});

// ROUTE:   =>  /profile/get/:id 
// METHOD:  =>  GET
// DESC:    =>  Get user's profile via ID
router.get('/get/:id', (req, res) => {
    //TODO: => Get user's profile via ID
});

// ROUTE:   =>  /profile/edit 
// METHOD:  =>  PUT
// DESC:    =>  Edit user's profile
router.put('/edit', (req, res) => {
    //TODO: => Edit user's profile
});

// ROUTE:   =>  /profile/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete user
router.delete('/delete', (req, res) => {
    //TODO: => Delete user
});


module.exports = router;