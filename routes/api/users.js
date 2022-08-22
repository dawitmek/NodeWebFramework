let express = require("express");

let router = express.Router();

router.get("/", function(req, res){
    res.json("This is a json status code for the users api");
});

module.exports = router;