const { sequelize, models } = require("../database/dbsequelize");
const Endpoint = process.env.ENDPOINT;

//Function  for  create  new  user,  validate  if  exist
CreateUser = async (parms) => {
  let user = await parms;
  let exist = await UserRegister(user);
  if (exist.length > 0) {
    let msn = "Error user not register, check information";
    let response = MesaggePetition(msn, exist);
    return response;
  } else {
    parms.Status = 1;
    let CreateUser = await sequelize.models.User.create(user);
    let msn = "User create Success";
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
  let msn = "Get  All Users";
  let response = MesaggePetition(msn, AllInfo);
  return response;
};

//GEt  only  id  user  and add  enpoint vercel
UniqueUserInfo = async (params, res) => {
  let id = params.id;
  let user = await sequelize.models.User.findAll({
    where: {
      IdUser: id,
    },
  });
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
  if (user.length > 0) {
    let msn = "User Unique  success";
    let response = MesaggePetition(msn, user);
    return response;
  } else {
    let msn = "Error id not find";
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
      let msn = "User update  success";
      let response = MesaggePetition(msn, updateUSer);
      return response;
    } else {
      return MesaggePetition("Error with user", 0);
    }
  
};

module.exports = {
  CreateUser,
  getAllUser,
  UniqueUserInfo,
  UpdateUsers,
};
