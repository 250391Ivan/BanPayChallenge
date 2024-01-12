//Middleare  for  validate  jwt on  methods
const { response, request } = require("express");
const jwt = require("jsonwebtoken");

//Validate  if  headers have  token  for  accedd  to  methods
const validateJWT = (req = request, res = response, next) => {
  const Token = req.header("MyToken");
  if (!Token) {
    // If  headerMyToken  not  exixit  haver error
    return res.status(401).json("No exist token");
  } else {
    try {
      //If jwt  is correct  acced  to  next  method
      jwt.verify(Token, process.env.SECRETKEY);
      next();
    } catch (error) {
      //If  jwt  exist  but  is  incorrect  and not matsh  with secret
      console.log("error");
      res.status(401).json("Token  is  invalid");
    }
  }
};

module.exports = {
  validateJWT,
};
