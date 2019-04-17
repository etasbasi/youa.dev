const router = require("express").Router();
const passport = require("passport");
const inputValidation = require("../utils/validateInput");
const toolkit = require("../utils/toolkit");
const Post = require("../db/models/Post");
const Comment = require("../db/models/Comment");
const Like = require("../db/models/Like");

// ROUTE:   =>  /api/posts/create
// METHOD:  =>  POST
// DESC:    =>  Create a new post
router.post(
  "/create",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const inputErrors = inputValidation.post(req.body);
    if (!inputErrors) {
      const randomHandleNumber = `${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
      )}${Math.floor(Math.random() * 10)}`;
      Post.create({
        user_id: req.user.id,
        handle: `${req.body.title
          .toLowerCase()
          .split(" ")
          .join("-")}-${randomHandleNumber}`,
        title: req.body.title,
        body: req.body.body
      })
        .then(post => {
          if (post) {
            return toolkit.handler(req, res, 200, post);
          } else {
            return toolkit.handler(req, res, 400, "An error has occured.");
          }
        })
        .catch(err => console.error(err));
    } else {
      return toolkit.handler(req, res, 400, inputErrors);
    }
  }
);

// ROUTE:   =>  /api/posts/get/:handle
// METHOD:  =>  GET
// DESC:    =>  Get a post via handle
router.get("/get/:handle", (req, res) => {
  Post.findOne({
    where: {
      handle: req.params.handle
    }
  })
    .then(post => {
      if (post) {
        return toolkit.handler(req, res, 200, post);
      } else {
        return toolkit.handler(req, res, 404, "Post not found.");
      }
    })
    .catch(err => console.error(err));
});

// ROUTE:   =>  /api/posts/user/:id
// METHOD:  =>  GET
// DESC:    =>  Get posts for each user via ID
router.get("/user/:handle", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.params.id
    }
  })
    .then(posts => {
      if (posts) {
        return toolkit.handler(req, res, 200, posts);
      } else {
        return toolkit.handler(req, res, 404, "The user has no posts.");
      }
    })
    .catch(err => console.error(err));
});

// ROUTE:   =>  /api/posts/:handle/edit
// METHOD:  =>  PUT
// DESC:    =>  Edit a post
router.put(
  "/edit/:handle",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Post.findOne({
      where: {
        handle: req.params.handle,
        user_id: req.user.id
      }
    })
      .then(profile => {
        if (profile) {
          profile
            .update({
              handle: `${req.body.title.toLowerCase().replace(" ", "-")}`,
              title: req.body.title,
              body: req.body.body
            })
            .then(result => {
              return toolkit.handler(req, res, 200, result);
            })
            .catch(err => console.error(err));
        } else {
          return toolkit.handler(req, res, 404, "Post not found.");
        }
      })
      .catch(err => console.error(err));
  }
);

// ROUTE:   =>  /api/posts/delete/:handle
// METHOD:  =>  DELETE
// DESC:    =>  Delete a post
router.delete(
  "/delete/:handle",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Post.destroy({
      where: {
        handle: req.params.handle,
        user_id: req.user.id
      }
    })
      // If the delete request was successful, send out a JSON object with the value of true
      .then(() => {
        return toolkit.handler(req, res, 200, "Post deleted.");
      })
      // Else, log the produced error
      .catch(err => console.error(err));
  }
);

// ROUTE:   =>  /api/posts/comments/:handle
// METHOD:  =>  GET
// DESC:    =>  Get comments
router.get("/comments/:handle", (req, res) => {
  Post.findOne({
    where: {
      handle: req.params.handle
    }
  }).then(post => {
    if (post) {
      Comment.findAll({
        where: {
          post_id: post.id
        }
      }).then(comments => {
        if (comments) {
          return toolkit.handler(req, res, 200, comments);
        } else {
          return toolkit.handler(req, res, 404, "No comments found.");
        }
      });
    } else {
      return toolkit.handler(req, res, 404, "Post not found.");
    }
  });
});

// ROUTE:   =>  /api/posts/comment/:handle/
// METHOD:  =>  PUT
// DESC:    =>  Comment on a post
router.put(
  "/comment/:handle",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
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
              .then(comment => {
                return toolkit.handler(req, res, 200, comment);
              })
              .catch(err => console.error(err));
          } else {
            return toolkit.handler(req, res, 404, "Post not found.");
          }
        })
        .catch(err => console.error(err));
    } else {
      return toolkit.handler(req, res, 400, inputErrors);
    }
  }
);

// ROUTE:   =>  /api/posts/comment/edit/:handle
// METHOD:  =>  PATCH
// DESC:    =>  Edit a comment
router.patch(
  "/comment/edit/:handle",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
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
          }).then(comment => {
            if (comment) {
              comment
                .update({
                  body: req.body.body
                })
                .then(result => {
                  return toolkit.handler(req, res, 200, result);
                })
                .catch(err => console.error(err));
            } else {
              return toolkit.handler(req, res, 404, "Comment not found.");
            }
          });
        } else {
          return toolkit.handler(req, res, 404, "Post not found.");
        }
      })
      .catch(err => console.error(err));
  }
);

// ROUTE:   =>  /api/posts/comment/delete/:handle
// METHOD:  =>  DELETE
// DESC:    =>  Delete a comment
router.delete(
  "/comment/delete/:handle",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Post.findOne({
      where: {
        handle: req.params.handle
      }
    }).then(post => {
      if (post) {
        Comment.findOne({
          where: {
            user_id: req.user.id,
            post_id: post.id
          }
        }).then(comment => {
          if (comment) {
            comment
              .destroy()
              .then(() => {
                return toolkit.handler(req, res, 200, "Comment deleted.");
              })
              .catch(err => console.error(err));
          } else {
            return toolkit.handler(req, res, 404, "Comment not found.");
          }
        });
      } else {
        return toolkit.handler(req, res, 404, "Post not found.");
      }
    });
  }
);

// ROUTE:   =>  /api/posts/likes/:handle
// METHOD:  =>  GET
// DESC:    =>  Get likes
router.get("/likes/:handle", (req, res) => {
  Post.findOne({
    where: {
      handle: req.params.handle
    }
  }).then(post => {
    if (post) {
      Like.findAll({
        where: {
          post_id: post.id
        }
      })
        .then(likes => {
          return toolkit.handler(req, res, 200, likes);
        })
        .catch(err => console.error(err));
    } else {
      return toolkit.handler(req, res, 404, "Post not found");
    }
  });
});

// ROUTE:   =>  /api/posts/like/:handle
// METHOD:  =>  PATCH
// DESC:    =>  Like or dislike a post
router.patch(
  "/like/:handle",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Post.findOne({
      where: {
        handle: req.params.handle
      }
    }).then(post => {
      if (post) {
        Like.findOne({
          where: {
            user_id: req.user.id,
            post_id: post
          }
        }).then(like => {
          if (!like) {
            Like.create({
              user_id: req.user.id,
              post_id: post.id,
              value: true
            })
              .then(() => {
                return toolkit.handler(req, res, 200, true);
              })
              .catch(err => console.error(err));
          } else {
            like
              .destroy()
              .then(() => {
                return toolkit.handler(req, res, 200, false);
              })
              .catch(err => console.error(err));
          }
        });
      } else {
        return toolkit.handler(req, res, 404, "Post not found.");
      }
    });
  }
);

module.exports = router;
