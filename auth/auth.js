let ensureAuth = function ensureAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('info', 'You must be logged in to see this page');
        res.redirect('/login');
    }
}

module.exports = { ensureAuthenticated: ensureAuth };