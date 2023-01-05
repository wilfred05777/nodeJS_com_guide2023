const express = require("express");

const router = express.Router();

/// your request here
router.all("/listview", (req, res) => {
  res.send(
    `<h2>
   Welcome to list view
  </h2>
  `
  );
});

module.exports = router;
