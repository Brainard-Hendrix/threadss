const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: true }));
const session = require('express-session');

router.get('/home', (req, res) =>{
    res.render("pages/home");
})

module.exports = router;