//Make  server with Express
const express = require("express");
const server = express();
require("dotenv").config();
const PORT = process.env.PORT;

//Add  routes for  diferents endpoints
server.use("/users", require("./routes/users.js"));

const Myserver = server.listen(PORT, () => {
  console.log("----- SERVER RUN -----");
  console.log(`App open in Port:: ${PORT}`);
});
