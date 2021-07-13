const path = require('path')
const express = require('express')
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const { query } = require('express');
const app = express()
const port = 3000

const route = require('./routes');

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

// static file
app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})