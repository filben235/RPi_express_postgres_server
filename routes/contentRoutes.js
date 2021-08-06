const express = require("express");
const router = express.Router();
const content = require("../controllers/contentControllers");

router.post("/", content.postContent);

router.get("/latest/", content.getLatestContent);

module.exports = router;
