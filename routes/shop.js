const path = require("path");

const express = require("express");

const router = express.Router();

/// default route must be on the bottom
router.get("/", (req, res, next) => {
  // res.sendFile("/views/shop.html"); // error
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
