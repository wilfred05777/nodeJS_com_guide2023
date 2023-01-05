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
/// the order matters here
app.use(shopRoutes); /// default routes
/// default route must be on the bottom

app.listen(3000);
