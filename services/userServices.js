const { sequelize, models } = require("../database/dbsequelize");
const Endpoint = process.env.ENDPOINT;

//Function  for  create  new  user,  validate  if  exist
CreateUser = async (parms) => {
  let user = await parms;
  let exist = await UserRegister(user);
  if (exist.length > 0) {
    let msn = "Error, user not registered, check information  and  email";
    let response = MesaggePetition(msn, 0);
    return response;
  } else {
    parms.Status = 1;
    let CreateUser = await sequelize.models.User.create(user);
    let msn = "Sucess for  create User";
    let response = MesaggePetition(msn, CreateUser);
    return response;
  }
};
// Validate  if  usser  exist  on Db
UserRegister = async (user) => {
  let validate = await sequelize.models.User.findAll({
    where: user,
  });
  return validate;
};
//Send  information about  de  petition
MesaggePetition = (msn, data) => {
  let res = {
    msn,
    data,
  };
  return res;
};
//All users
getAllUser = async () => {
  let AllInfo = await sequelize.models.User.findAll();
  if (AllInfo[0]) {
    let msn = "Sucess for  get  all users";
    let response = MesaggePetition(msn, AllInfo);
    return response;
  } else {
    let msn = "Error for  get  all users, consulting with administraitor";
    let response = MesaggePetition(msn, AllInfo);
    return response;
  }
};

//GEt  only  id  user  and add  enpoint vercel
UniqueUserInfo = async (params, res) => {
  let id = params.id;
  let user = await sequelize.models.User.findAll({
    where: {
      IdUser: id,
    },
  });
  // if  not  exist resolve
  if (user[0]) {
    console.log(user[0]);
    let rol = await user[0].IdRol;
    let myRolName = await sequelize.models.Rol.findAll({
      where: {
        IdRol: rol,
      },
      attributes: ["Name"],
    });
    let name = myRolName[0].Name;
    let data = await fetch(`${Endpoint}${name}`).then((response) =>
      response.json()
    );
    user.push(data);
    let msn = "Success with  user data unique, and add Endpoint data";
    let response = MesaggePetition(msn, user);
    return response;
  } else {
    let msn = "Error, Not find Id";
    let response = MesaggePetition(msn, user);
    return response;
  }
};
// Function  for  update  user  by  ID
UpdateUsers = async (params) => {
  const UniqueUser = await sequelize.models.User.findAll({
    where: {
      IdUser: params.IdUser,
    },
    attributes: ["IdUser"],
  });
  if (UniqueUser[0]) {
    let UserId = UniqueUser[0].IdUser;
    let updateUSer = sequelize.models.User.update(
      {
        IdRol: params.IdRol,
        FirstName: params.FirstName,
        LastName: params.LastName,
        Email: params.Email,
      },
      { where: { IdUser: UserId } }
    );
    let msn = "Sucess for  update information about id user";
    let response = MesaggePetition(msn, updateUSer);
    return response;
  } else {
    return MesaggePetition("Error, Not find Id", 0);
  }
};
// Service  for  eliminate  user  bi  ID
EliminateUser = async (params) => {
  let delUser = await sequelize.models.User.destroy({
    where: {
      IdUser: params.IdUser,
    },
  });
  if (delUser) {
    let msn = "Sucess for eliminate user";
    let response = MesaggePetition(msn, delUser);
    return response;
  } else {
    let msn = "Error, Not find Ids not  delete  information";
    let response = MesaggePetition(msn, delUser);
    return response;
  }
};

module.exports = {
  CreateUser,
  getAllUser,
  UniqueUserInfo,
  UpdateUsers,
  EliminateUser,
};
