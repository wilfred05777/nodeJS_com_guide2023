const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/// import Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const profileRoutes = require("./routes/profile");
const listRoutes = require("./routes/listview");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(listRoutes);
app.use(profileRoutes);
app.use(adminRoutes);
app.use(shopRoutes); /// default routes

/// 67. Adding a 404 Error Page
app.use((req, res, next) => {
  res.status(404).send(`
    <h1>Page not found!</h1>
  `);
});

app.listen(3000);
