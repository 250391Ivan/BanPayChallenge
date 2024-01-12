//Meke  CRUD  for bakend
const { json } = require("body-parser");
const {
  getAllUser,
  CreateUser,
  UniqueUserInfo,
  UpdateUsers,
  EliminateUser,
} = require("../services/userServices");
const { makeJWT } = require("../helpers/jwt");

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
  let InfoUser = UniqueUserInfo(req.params).then((OnlyUser) => {
    res.json(OnlyUser);
  });
};
//Updte  data User
UpdateDatUser = (req, res) => {
  let user = req.body;
  let changeData = UpdateUsers(user).then((user) => {
    res.json(user);
  });
};

//Delete user  by id
DeleteUser = (req, res) => {
  let user = req.body;
  let deleteUser = EliminateUser(user).then((user) => {
    res.json(user);
  });
};

//CreateToken

CreateToken = async (req, res) => {
  let myTkn = await makeJWT();
  let response = {
    msn: "Its  is  token",
    tkn: myTkn,
  };
  res.json(response);
};

module.exports = {
  AllUsers,
  MakeUsers,
  OnlyUser,
  UpdateDatUser,
  DeleteUser,
  CreateToken,
};
