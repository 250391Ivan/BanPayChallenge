const { json } = require("body-parser");
const { getAllUser, CreateUser } = require("../services/userServices");
//Meke  CRUD  for bakend

//Create  new  User
MakeUsers = (req, res) => {
  let dataUser = req.body;
  let NewUser = CreateUser(dataUser).then((user) => {
    res.json(user);
  });
};

//Get  for  all users
AllUsers = (req, res) => {
  let user = getAllUser().then((users) => {
    res.json(users);
  });
};

module.exports = {
  AllUsers,
  MakeUsers,
};
