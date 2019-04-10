const os = require('os');
const passport = require('passport');
const router = require('express').Router();
const toolkit = require('../utils/toolkit');

// ROUTE:   =>  /api/test 
// METHOD:  =>  GET
// DESC:    =>  Server test 
router.get('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (toolkit.isAdmin(req.user)) {
        const response = {
            message: 'Server running. Status: Green - HTTP 200 OK.',
            data: {
                uptime: os.uptime(),
                cpu: os.cpus(),
                memory: os.totalmem(),
                freeMemory: os.freemem(),
                usedMemory: os.totalmem() - os.freemem(),
            }
        };
        return toolkit.handler(req, res, 200, response, true);
    } else {
        return toolkit.handler(req, res, 401, 'You are not an admin.');
    }
});

module.exports = router;