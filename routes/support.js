const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const inputValidation = require('../utils/validateInput');
const handleErrors = require('../utils/handleErrors');
const Report = require('../db/models/Report');
const User = require('../db/models/User');
const Ticket = require('../db/models/Ticket');

// TODO:    =>  Implement the mail module

// ROUTE:   =>  /api/support/report 
// METHOD:  =>  POST
// DESC:    =>  Report an user
// TODO:    =>  Send out a confirmation email to the user
router.post('/report', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
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
});

// ROUTE:   =>  /api/support/ticket 
// METHOD:  =>  POST
// DESC:    =>  Support tickets
// TODO:    =>  Send out a confirmation email to the user
router.post('/ticket', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const inputErrors = inputValidation.ticket(req.body);
    if (!inputErrors) {
        Ticket.create({
                user_id: req.user.id,
                subject: req.body.subject,
                body: req.body.body
            })
            .then(ticket => {
                if (ticket) {
                    res.status(200).json(ticket)
                } else {
                    res.status(400).json(handleErrors('An error has occured.'));
                }
            })
    } else {
        res.status(400).json(inputErrors);
    }
});

// ROUTE:   =>  /api/support/password 
// METHOD:  =>  PATCH
// DESC:    =>  Password Recovery
// TODO:    =>  Mailing system, replace query with an actual recovery token
router.patch('/password', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                const inputErrors = inputValidation.password(req.body);
                if (!inputErrors) {
                    bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                        if (err) {
                            res.status(400).json(handleErrors('An error has occured.'));
                        } else {
                            user.update({
                                    password: encrypted
                                })
                                .then(result => res.status(200).json(result))
                                .catch(err => console.error(err));
                        }
                    })
                } else {
                    res.status(400).json(inputErrors);
                }
            } else {
                res.status(404).json(handleErrors('User has not been found.'));
            }
        })
});


module.exports = router;