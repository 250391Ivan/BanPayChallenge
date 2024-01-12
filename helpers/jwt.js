const jwt = require("jsonwebtoken");
const key = process.env.SECRETKEY;
//Create jwt  for  add  security  on app
const makeJWT = () => {
  return new Promise((resolve, reject) => {
    let uid = "";
    const payload = { uid };
    jwt.sign(
      payload,
      key,
      {
        expiresIn: "3h",
      },
      (error, token) => {
        if (error) {
          console.log("Error  make  jwt");
          reject("NOs  is  posible make jwt");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  makeJWT,
};
