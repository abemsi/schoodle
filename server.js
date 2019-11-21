// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const sass          = require("node-sass-middleware");
const app           = express();
const morgan        = require('morgan');
const cookieSession = require('cookie-session');
const { generateRandomString } = require('./helpers')


// cookie-session
app.use(cookieSession({
  name: 'session',
  keys: ["bloop"]}));

  // PG database client/connection setup
const { Pool } = require('pg');
const db = require('./lib/db.js')();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

/**
 * GET/POST ROUTES FOR HOMEPAGE TO CREATE SCHOODLE
 * */
app.get("/", (req, res) => {
  const user = req.session.user_id
  if (!user) {
  }
  res.render("index");
});

// app.post("/", (req, res) => {  
//   res.redirect("schoodles");
// });

app.get("/schoodles/:link", (req, res) => {
  db.getAllPollInformation(req.params.link).then( function(pollInfo) {
    // console.log(pollInfo)
    res.render("schoodles", { results: pollInfo.results, options: pollInfo.options });
  })
});

app.post("/api/widgets", (req, res) => {
  db.getAllPollInformation(req.params.link).then( function(pollInfo) {
 
  console.log('post request on new page here @@@@@@@@@', req.body);
  res.render("schoodles", { results: pollInfo.results, options: pollInfo.options });
  })
});

app.put("/schoodles/:id", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
