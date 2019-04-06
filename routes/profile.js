const router = require('express').Router();
const passport = require('passport');
const inputValidation = require('../utils/validateInput');
const Profile = require('../db/models/Profile');

// ROUTE:   =>  /api/profile/create 
// METHOD:  =>  POST
// DESC:    =>  Create a new profile
router.post('/create', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    // Check if the provided input is valid
    const inputErrors = inputValidation.profile(req.body);
    // If the function returns false, in regards of no errors being returned, proceed
    if (!inputErrors) {
        const {
            id
        } = req.user;
        // Check if profile exists via user ID
        Profile.findOne({
                where: {
                    user_id: id
                }
            })
            .then(profile => {
                if (!profile) {
                    // If there's no profile, create a new one
                    const randomHandleNumber = `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
                    const handle = `${firstName.toLowerCase().replace(' ', '')}-${lastName.toLowerCase().replace(' ', '')}-${randomHandleNumber}`;
                    Profile.create({
                            user_id: id,
                            handle,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            profilePicture: req.body.profilePicture,
                            website: req.body.website,
                            github: req.body.github,
                            linkedin: req.body.linkedin,
                            dev: req.body.dev,
                            stackoverflow: req.body.stackoverflow,
                            biography: req.body.biography
                        })
                        .then(profile => res.status(200).json(profile))
                        .catch(err => res.status(500).json(err))
                } else {
                    // Send an error message
                    res.status(400).json({
                        error: "User already exists."
                    });
                }
            })
            .catch(err => console.error(err));
    } else {
        // Otherwise, return a JSON object containing all the errors
        res.status(400).json(inputErrors);
    }
});

// ROUTE:   =>  /api/profile/get/current 
// METHOD:  =>  GET
// DESC:    =>  Get current user's profile 
router.get('/get/current', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
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
router.put('/edit', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Edit user's profile
});

// ROUTE:   =>  /api/profile/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete user
router.delete('/delete', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Delete user
});


module.exports = router;