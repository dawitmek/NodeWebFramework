let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.render('./home/');
})

router.get('/home', function(req, res) {
    res.render('./home/home');
})


router.get('/about', function(req, res) {
    res.render('./pages/about');
})

module.exports = router;