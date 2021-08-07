const express = require("express");
const router = express.Router();
const content = require("../controllers/contentControllers");

let passport = require("passport");
let basicAuth = passport.authenticate("basic", { session: false });

router.post("/", basicAuth, content.postContent);

router.get("/latest/", basicAuth, content.getLatestContent);

module.exports = router;
