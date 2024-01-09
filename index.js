//Make  server with Express

const express = require("express");
const server = express();
require("dotenv").config();

server.get("/", (req, res) => {
  res.send("Method  get  for testing");
});

//server.listen(8085);
const PORT = process.env.PORT;
const Myserver = server.listen(PORT, () => {
  console.log("Server  Run ");
  console.log(`App open  in Port :: ${PORT}`);
});
