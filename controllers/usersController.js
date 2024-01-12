const { json } = require("body-parser");
const {
  getAllUser,
  CreateUser,
  UniqueUserInfo,
} = require("../services/userServices");
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

//Get  infor  for  unique  user and add infor  enpoint
OnlyUser = (req, res) => {
  console.log(req.params);
  let InfoUser = UniqueUserInfo(req.params).then((OnlyUser) => {
    res.json(OnlyUser);
  });
};

module.exports = {
  AllUsers,
  MakeUsers,
  OnlyUser,
};
