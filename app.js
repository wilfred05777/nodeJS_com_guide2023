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
// 68. Filtering Paths
app.use("/admin", adminRoutes);
app.use(shopRoutes); /// default routes

app.use((req, res, next) => {
  res.status(404).send(`
    <h1>Page not found!</h1>
  `);
});

app.listen(3000);
