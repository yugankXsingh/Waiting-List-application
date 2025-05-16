var express = require("express");
var app = express();
var mysql = require("mysql2");
var bodyparser = require("body-parser");
const { faker } = require("@faker-js/faker");

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "OnePieceIsReal",
  database: "join_us",
});

app.get("/", function (req, res) {
  connection.query("SELECT COUNT(*) FROM users", function (err, result) {
    if (err) throw err;
    let count = result[0]["COUNT(*)"];
    console.log(result);
    res.render("home", { count: count });
  });
});

app.post("/register", function (req, res) {
  var person = {
    email: req.body.email,
  };
  connection.query("INSERT INTO users SET ?", person, function (err, result) {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        // Handling Duplicate entry error
        return res.send("Email already registered!");
      }
      return res.status(500).send("Something went wrong.");
    }
    console.log(result);
    res.render("thankyou"); // 👈 after successful registration
  });
});

// insert 500 fake users
app.get("/seed", function (req, res) {
  var data = [];
  for (let i = 0; i < 500; i++) {
    data.push([faker.internet.email()]);
  }

  var q = "INSERT INTO users (email) VALUES ?";
  connection.query(q, [data], function (err, result) {
    if (err) throw err;
    res.send("Seeded 500 fake users!");
  });
});

// Display all users
app.get("/users", function (req, res) {
  connection.query("SELECT * FROM users ORDER BY created_at DESC", function (err, result) {
    if (err) throw err;
    res.render("users", { users: result });
  });
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
