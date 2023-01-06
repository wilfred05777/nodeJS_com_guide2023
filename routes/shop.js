const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

/// default route must be on the bottom
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // res.sendFile("/views/shop.html"); // error
});

module.exports = router;
