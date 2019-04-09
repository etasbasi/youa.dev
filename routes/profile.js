const router = require('express').Router();
const passport = require('passport');
const toolkit = require('../utils/toolkit');
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
                    const handle = `${req.body.firstName.toLowerCase().replace(' ', '')}-${req.body.lastName.toLowerCase().replace(' ', '')}-${randomHandleNumber}`;
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
                        .then(profile => {
                            return toolkit.handler(req, res, 200, profile);
                        })
                        .catch(err => console.error(err));
                } else {
                    // Send an error message
                    return toolkit.handler(req, res, 403, 'You already have a profile.');
                }
            })
            .catch(err => console.error(err));
    } else {
        // Otherwise, return a JSON object containing all the errors
        return toolkit.handler(req, res, 400, inputErrors);
    }
});

// ROUTE:   =>  /api/profile/current 
// METHOD:  =>  GET
// DESC:    =>  Get current user's profile 
router.get('/current', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Profile.findOne({
            where: {
                user_id: req.user.id
            }
        })
        .then(profile => {
            if (!profile) {
                return toolkit.handler(req, res, 404, 'You do not have a profile.');
            } else {
                return toolkit.handler(req, res, 200, profile);
            }
        })
        .catch(err => console.error(err));
});

// ROUTE:   =>  /api/profile/:id 
// METHOD:  =>  GET
// DESC:    =>  Get user's profile via ID
router.get('/:id', (req, res) => {
    Profile.findOne({
            where: {
                user_id: req.params.id
            }
        })
        .then(profile => {
            if (!profile) {
                return toolkit.handler(req, res, 404, 'Profile not found.');
            } else {
                return toolkit.handler(req, res, 200, profile);
            }
        })
        .catch(err => console.error(err));
});

// ROUTE:   =>  /api/profile/edit 
// METHOD:  =>  PUT
// DESC:    =>  Edit user's profile
router.put('/edit', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Profile.findOne({
            where: {
                user_id: req.user.id
            }
        })
        .then(profile => {
            if (!profile) {
                return toolkit.handler(req, res, 404, 'Profile not found.');
            } else {
                profile.update({
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
                    .then(result => {
                        return toolkit.handler(req, res, 200, result);
                    })
                    .catch(err => console.error(err));
            }
        })
});

// ROUTE:   =>  /api/profile/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete profile
router.delete('/delete', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Profile.destroy({
            where: {
                id: req.body.id
            }
        })
        // If the delete request was successful, send out a JSON object with the value of true
        .then(() => {
            return toolkit.handler(req, res, 200, 'Profile deleted.');
        })
        .catch(err => console.error(err));
});


module.exports = router;