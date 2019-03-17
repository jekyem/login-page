"use strict";

var express = require("express");

var app = express();
app.use(express.static("dist"));
app.get("/", function (req, res) {
  return res.send("Hi~!!");
});
app.get("/api/getUsername", function (req, res) {
  return res.send("Hi!");
});
app.listen(8080, function () {
  return console.log("Listeniddng on port 8080!");
});