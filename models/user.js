let bcrypt = require('bcryptjs');
let mongoose = require('mongoose');

const SALT_FACTOR = bcrypt.genSalt(10);

let userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

userSchema.pre("save", function (done) {
    let user = this;
    console.log(user);
    if (!user.isModified('password')) {
        return done();
    }
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) { return done(err); }
        bcrypt.hash(user.password, SALT_FACTOR, function (err, hashedPassword) {
            if (err) { return done(err) }
            user.password = hashedPassword;
            console.log(hashedPassword, user.password);
            done();
        });
    })
});

userSchema.methods.checkPassword = function (guess, done) {
    if (this.password != null) {
        bcrypt.compare(guess, this.password, function (err, isMatch) {
            done(err, isMatch);
        })
    }
}

let User = mongoose.model("User", userSchema);


module.exports = User;