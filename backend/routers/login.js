const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: true }));
const session = require('express-session');

router.get('/', (req, res) =>{
    res.render("pages/login");
})

module.exports = router;