var express = require('express');

var router = express.Router();

//linking to index.handlebars content
router.get("/", function (req, res) {
    res.render('./index');
})

module.exports = router;