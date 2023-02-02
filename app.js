const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const expressHbs = require('express-handlebars')
// const ejs = require('ejs')
// const { engine } = require('express-handlebars')

const app = express()

// app.engine('handlebars', expressHbs.engine())

// https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function reading docs
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')

// app.set('view engine', 'handlebars')

app.set('views', 'views')

// app.set('views', 'views')

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
