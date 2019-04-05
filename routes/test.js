const router = require('express').Router();

// ROUTE:   =>  /api/test 
// METHOD:  =>  GET
// DESC:    =>  Server test 
router.get('/', (req, res) => {
    res.send('Test successful. Server status: Green.');
});

module.exports = router;