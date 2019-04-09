const router = require('express').Router();
const toolkit = require('../utils/toolkit');

// ROUTE:   =>  /api/test 
// METHOD:  =>  GET
// DESC:    =>  Server test 
router.get('/', (req, res) => {
    const response = 'Server running. Status: Green - HTTP 200 OK.';
    return toolkit.handler(req, res, 200, response, true);
});

module.exports = router;