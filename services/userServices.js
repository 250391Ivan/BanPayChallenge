const { sequelize } = require("../database/dbsequelize");

getAllUser = async () => {
  let data = await {
    msn: "All  data information on services",
    code: 202,
  };
  return data;
};
Another = async () => {
  let allInfo = await sequelize.models.Client.findAll();
  console.log(allInfo);
  let data = await {
    msn: "Another Information",
    code: 202,
    data: allInfo,
  };
  return data;
};

module.exports = {
  getAllUser,
  Another,
};
