//Make  server with Express

const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Method  get  for testing");
});

//server.listen(8085);
const PORT = 8085;
const Myserver = server.listen(PORT, () => {
  console.log("Server  Run ");
  console.log(`App open  in Port :: ${PORT}`);
});
