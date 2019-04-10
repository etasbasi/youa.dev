const router = require('express').Router();
const passport = require('passport');
const toolkit = require('../utils/toolkit');
const Log = require('../db/models/Log');
const Ticket = require('../db/models/Ticket');
const Report = require('../db/models/Report');
const User = require('../db/models/User');

// TODO:    =>  Implement mail module

// ROUTE:   =>  /api/admin/ban/
// METHOD:  =>  PUT
// DESC:    =>  Ban or unban an user
router.put('/ban', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        const userEmail = req.body.email;
        User.findOne({
                where: {
                    email: userEmail
                }
            })
            .then(user => {
                if (user) {
                    user.update({
                            isBanned: !user.isBanned
                        })
                        .then(result => {
                            return toolkit.handler(req, res, 200, result, true);
                        });
                } else {
                    return toolkit.handler(req, res, 404, 'User not found.');
                }
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

// ROUTE:   =>  /api/admin/rank/promote
// METHOD:  =>  PUT
// DESC:    =>  Promote or demote an user to admin 
router.put('/rank/promote', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    // Check if admin
    if (toolkit.isAdmin(req.user)) {
        const userEmail = req.body.email;
        // Find an user via email
        User.findOne({
                where: {
                    email: userEmail
                }
            })
            .then(user => {
                if (user) {
                    user.update({
                            type: user.type === 'user' ? 'admin' : 'user'
                        })
                        .then(result => {
                            return toolkit.handler(req, res, 200, result, true);
                        })
                        .catch(err => console.error(err));
                } else {
                    return toolkit.handler(req, res, 404, 'User not found.');
                }
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

// ROUTE:   =>  /api/admin/logs
// METHOD:  =>  GET
// DESC:    =>  Get server logs 
router.get('/logs', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        Log.findAll()
            .then(logs => {
                return toolkit.handler(req, res, 200, logs);
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

// ROUTE:   =>  /api/admin/tickets
// METHOD:  =>  GET
// DESC:    =>  Get tickets 
router.get('/tickets', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        Ticket.findAll({
                where: {
                    resolved: false
                }
            })
            .then(tickets => {
                return toolkit.handler(req, res, 200, tickets);
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

// ROUTE:   =>  /api/admin/reports
// METHOD:  =>  GET
// DESC:    =>  Get reports 
router.get('/reports', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        Report.findAll({
                where: {
                    resolved: false
                }
            })
            .then(reports => {
                return toolkit.handler(req, res, 200, reports);
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

// ROUTE:   =>  /api/admin/tickets/resolve/:id
// METHOD:  =>  PUT
// DESC:    =>  Resolve a ticket
router.put('/tickets/resolve/:id', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        Ticket.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(ticket => {
                if (ticket) {
                    ticket.update({
                            resolved: true
                        })
                        .then(result => {
                            return toolkit.handler(req, res, 200, result);
                        })
                        .catch(err => console.error(err));
                } else {
                    return toolkit.handler(req, res, 404, 'Ticket not found.');
                }
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

// ROUTE:   =>  /api/admin/reports/resolve/:id
// METHOD:  =>  PUT
// DESC:    =>  Resolve a report
router.put('/reports/resolve/:id', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        Report.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(report => {
                if (report) {
                    report.update({
                            resolved: true
                        })
                        .then(result => {
                            return toolkit.handler(req, res, 200, result);
                        })
                        .catch(err => console.error(err));
                } else {
                    return toolkit.handler(req, res, 404, 'Report not found.');
                }
            })
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

module.exports = router;