const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

//Sets our view engine to load files ending in .ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

const PORT = 3002;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("index");
});

app.get("/profile", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  res.render("profile");
});

app.get("/math", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "math.html"));
  res.render("math");
});

app.get("/faq", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "faq.html"));
});

app.get("/terms", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "terms.html"));
});

app.get("/slide", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "slide-show.html"));
  res.render("slide")
});

app.get("/about-us", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "about-us.html"));
  res.render("about-us");
});

app.get("/contact-us", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "contact-us.html"));
  res.render("contact-us");
});