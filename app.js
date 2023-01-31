const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/// set template engine to pug
app.set('view engine', 'pug')
/// telling express we are compiling a template engine
app.set('views', 'views')

/// import Routes
// const adminRoutes = require("./routes/admin");
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const profileRoutes = require('./routes/profile')
const listRoutes = require('./routes/listview')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(listRoutes)
app.use(profileRoutes)
// 68. Filtering Paths
app.use('/admin', adminData.routes)
app.use(shopRoutes) /// default routes

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render('404', { pageTitle: 'Page not Found!' })
})

app.listen(3000)
