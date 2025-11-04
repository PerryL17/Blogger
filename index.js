const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
