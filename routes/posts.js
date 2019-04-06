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
    const inputErrors = inputValidation.post(req.body);
    if (!inputErrors) {
        Post.create({
                user_id: req.user.id,
                handle: `${req.body.title.toLowerCase().replace(' ', '-')}`,
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

// ROUTE:   =>  /api/posts/:handle 
// METHOD:  =>  GET
// DESC:    =>  Get a post via handle
router.get('/:handle', (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle
            }
        })
        .then(post => {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
        .catch(err => console.error(err));
});

// ROUTE:   =>  /api/posts/:handle/edit 
// METHOD:  =>  PUT
// DESC:    =>  Edit a post
router.put('/:handle/edit', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle,
                user_id: req.user.id
            }
        })
        .then(profile => {
            if (profile) {
                profile.update({
                    handle: `${req.body.title.toLowerCase().replace(' ', '-')}`,
                    title: req.body.title,
                    body: req.body.body
                });
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
        .catch(err => console.error(err));
});

// ROUTE:   =>  /api/posts/:handle/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete a post
router.delete('/:handle/delete', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Post.destroy({
            where: {
                handle: req.params.handle,
                user_id: req.user.id
            }
        })
        // If the delete request was successful, send out a JSON object with the value of true
        .then(() => res.status(200).json({
            deleted: true
        }))
        // Else, log the produced error
        .catch(err => console.error(err));
});

// ROUTE:   =>  /api/posts/:handle/comment 
// METHOD:  =>  PATCH
// DESC:    =>  Comment on a post
router.patch('/:handle/comment', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Comment on a post
});

// ROUTE:   =>  /api/posts/:handle/like 
// METHOD:  =>  PATCH
// DESC:    =>  Like a post
router.patch('/:handle/like', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //TODO: => Like a post
});

module.exports = router;