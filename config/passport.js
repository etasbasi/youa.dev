const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../db/models/User');
const config = require('./config');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.SECRET_OR_KEY
};

module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({
                where: {
                    id: jwt_payload.id
                }
            })
            .then(user => {
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
            .catch(err => {
                return done(err, false)
            });
    }));
};