const router = require('express').Router();
const passport = require('passport');
const inputValidation = require('../utils/validateInput');
const Post = require('../db/models/Post');

// ROUTE:   =>  /api/posts/create 
// METHOD:  =>  POST
// DESC:    =>  Create a new post
router.post('/create', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Create a new post
    const inputErrors = inputValidation.post(req.body);
    if (!inputErrors) {
        Post.create({
                user_id: req.user.id,
                title: req.body.title,
                body: req.body.body
            })
            .then(post => {
                if (post) {
                    res.status(200).json(post);
                } else {
                    res.status(400).json({
                        error: 'An error has occured.'
                    });
                }
            })
            .catch(err => console.error(err));
    } else {
        res.status(400).json(inputErrors);
    }
});

// ROUTE:   =>  /api/posts/:id 
// METHOD:  =>  GET
// DESC:    =>  Get a post via ID
router.get('/:id', (req, res) => {
    //TODO: => Get a post via ID
});

// ROUTE:   =>  /api/posts/edit 
// METHOD:  =>  PUT
// DESC:    =>  Edit a post
router.put('/edit', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Edit a post
});

// ROUTE:   =>  /api/posts/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete a post
router.delete('/delete', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Delete a post
});

// ROUTE:   =>  /api/posts/:id/comment 
// METHOD:  =>  PATCH
// DESC:    =>  Comment on a post
router.patch('/:id/comment', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Comment on a post
});

// ROUTE:   =>  /api/posts/:id/like 
// METHOD:  =>  PATCH
// DESC:    =>  Like a post
router.patch('/:id/like', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Like a post
});

module.exports = router;