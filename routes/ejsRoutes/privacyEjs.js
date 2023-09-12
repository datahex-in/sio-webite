var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    res.render("privacy", { title: "Express" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
