const router = require('express').Router();
const passport = require('passport');
const inputValidation = require('../utils/validateInput');
const handleErrors = require('../utils/handleErrors');
const Report = require('../db/models/Report');

// TODO:    =>  Implement the mail module

// ROUTE:   =>  /api/support/report 
// METHOD:  =>  POST
// DESC:    =>  Report an user
router.post('/report', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: =>  Send out a confirmation email to the user
    const inputErrors = inputValidation.report(req.body);
    if (!inputErrors) {
        Report.create({
                user_id: req.user.id,
                reported_user_id: req.body.reported_user_id,
                reason: req.body.reason,
                body: req.body.body
            })
            .then(report => {
                if (report) {
                    res.status(200).json(report)
                } else {
                    res.status(400).json(handleErrors('An error has occured.'));
                }
            })
    } else {
        res.status(400).json(inputErrors);
    }
})

module.exports = router;