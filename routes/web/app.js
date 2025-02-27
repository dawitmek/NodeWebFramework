let express = require('express');

let router = express.Router();

const userData = require('../../models/comments');

let ensureAuthenticated = require('../../auth/auth').ensureAuthenticated;

let startTikTok = require('../../tiktok.js');

let mongoose = require('mongoose');

router.use(ensureAuthenticated);

let Score = userData();

router.get('/', function (req, res) {
    console.log("this is from the web app")
    res.redirect('/app/dashboard');
})

router.get('/dashboard', function (req, res) {
    router.get('../api/')
    res.render('./app/dashboard');
})

router.get('/:username/:userID/leaderboard', async function (req, res) {
    
    try {
        let documents = await Score.find({ id: req.params.username})
    } catch (error) {
        console.log(error);
    }
    res.render('./features/leaderboard');
})

router.get('/online-game', function (req, res) {
    res.render('./features/online-game');
})




module.exports = router;
