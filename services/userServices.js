const { sequelize } = require("../database/dbsequelize");

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

getAllUser = async () => {
  let AllInfo = await sequelize.models.User.findAll();
  let msn = "Get  All Users";
  let response = MesaggePetition(msn, AllInfo);
  return response;
};

module.exports = {
  CreateUser,
  getAllUser,
};
