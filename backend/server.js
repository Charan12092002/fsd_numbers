const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//get methodnpm install -g nodemon

app.get("/", (req, res) => {
  res.json(arr);
});

app.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
