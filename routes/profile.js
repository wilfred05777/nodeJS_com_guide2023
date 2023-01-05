const express = require("express");

const router = express.Router();

router.all("/profile", (req, res, next) => {
  res.send(`
  <h2>Profile page!</h2>
  `);
});

module.exports = router;
