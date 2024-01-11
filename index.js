//Make  server with Express
const express = require("express");
const server = express();
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

//Load  Public  html, for mini documentation
server.use(cors());
server.use(express.static("public"));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

//Add  routes for  diferents endpoints
server.use("/users", require("./routes/users.js"));
//Add  swagger  for  enpoint
server.use("/apidocs", require("./helpers/swagger.js"))

const Myserver = server.listen(PORT, () => {
  console.log("----- SERVER RUN -----");
  console.log(`App open in Port:: ${PORT}`);
});
