let passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

let User = require('././models/user');

module.exports = function () {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    })
}

passport.use("login", new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: "No user has that Email!" });
        }
        user.checkPassword(password, function (err, isMatch) {
            if (err) { return done(err); }
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Invalid password" });
            }
        });
    });
}));