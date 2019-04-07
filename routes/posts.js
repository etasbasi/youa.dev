const router = require('express').Router();
const passport = require('passport');
const inputValidation = require('../utils/validateInput');
const Post = require('../db/models/Post');
const Comment = require('../db/models/Comment');
const Like = require('../db/models/Like');

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
                    })
                    .then(result => {
                        res.status(200).json(result);
                    })
                    .catch(err => console.error(err));;
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

// ROUTE:   =>  /api/posts/:handle/comment/fetch 
// METHOD:  =>  GET
// DESC:    =>  Get comments
router.get('/:handle/comment/get', (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle
            }
        })
        .then(post => {
            if (post) {
                Comment.findAll({
                        where: {
                            post_id: post.id
                        }
                    })
                    .then(comments => {
                        if (comments) {
                            res.status(200).json(comments);
                        } else {
                            res.status(404).json({
                                error: 'No comments found.'
                            });
                        }
                    })
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
});

// ROUTE:   =>  /api/posts/:handle/comment/create 
// METHOD:  =>  PUT
// DESC:    =>  Comment on a post
router.put('/:handle/comment/create', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const inputErrors = inputValidation.comment(req.body);
    if (!inputErrors) {
        Post.findOne({
                where: {
                    handle: req.params.handle
                }
            })
            .then(post => {
                if (post) {
                    Comment.create({
                            user_id: req.user.id,
                            post_id: post.id,
                            body: req.body.body
                        })
                        .then(comment => res.status(200).json(comment))
                        .catch(err => console.error(err));
                } else {
                    res.status(404).json({
                        error: 'Post not found.'
                    });
                }
            })
            .catch(err => console.error(err));
    } else {
        res.status(400).json(inputErrors);
    }
});

// ROUTE:   =>  /api/posts/:handle/comment/edit 
// METHOD:  =>  PATCH
// DESC:    =>  Edit a comment
router.patch('/:handle/comment/edit', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle
            }
        })
        .then(post => {
            if (post) {
                Comment.findOne({
                        where: {
                            user_id: req.user.id,
                            post_id: post.id
                        }
                    })
                    .then(comment => {
                        if (comment) {
                            comment.update({
                                    body: req.body.body
                                })
                                .then(result => {
                                    res.status(200).json(result);
                                })
                                .catch(err => console.error(err));
                        } else {
                            res.status(404).json({
                                error: 'Comment not found.'
                            });
                        }
                    })
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
        .catch(err => console.error(err));
});

// ROUTE:   =>  /api/posts/:handle/comment/delete 
// METHOD:  =>  DELETE
// DESC:    =>  Delete a comment
router.delete('/:handle/comment/delete', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle
            }
        })
        .then(post => {
            if (post) {
                Comment.findOne({
                        where: {
                            user_id: req.user.id,
                            post_id: post.id
                        }
                    })
                    .then(comment => {
                        if (comment) {
                            comment.destroy()
                                .then(() => res.status(200).json({
                                    deleted: true
                                }))
                                .catch(err => console.error(err));
                        } else {
                            res.status(404).json({
                                error: 'Comment not found.'
                            });
                        }
                    })
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
});

// ROUTE:   =>  /api/posts/:handle/like/fetch
// METHOD:  =>  GET
// DESC:    =>  Get likes
router.get('/:handle/like/fetch', (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle
            }
        })
        .then(post => {
            if (post) {
                Like.findAll({
                        where: {
                            post_id: post.id
                        }
                    })
                    .then(likes => res.status(200).json(likes))
                    .catch(err => console.error(err));
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
})

// ROUTE:   =>  /api/posts/:handle/like 
// METHOD:  =>  PATCH
// DESC:    =>  Like or dislike a post
router.patch('/:handle/like', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Post.findOne({
            where: {
                handle: req.params.handle
            }
        })
        .then(post => {
            if (post) {
                Like.findOne({
                        where: {
                            user_id: req.user.id,
                            post_id: post
                        }
                    })
                    .then(like => {
                        if (!like) {
                            Like.create({
                                    user_id: req.user.id,
                                    post_id: post.id,
                                    value: true
                                })
                                .then(() => res.status(200).json({
                                    liked: true
                                }))
                                .catch(err => console.error(err));
                        } else {
                            like.destroy()
                                .then(() => res.status(200).json({
                                    liked: false
                                }))
                                .catch(err => console.error(err));
                        }
                    })
            } else {
                res.status(404).json({
                    error: 'Post not found.'
                });
            }
        })
});

module.exports = router;