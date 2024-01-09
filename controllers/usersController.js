const { getAllUser, Another } = require("../services/userServices");
getAllUsers = (req, res) => {
  let user = Another().then((users) => {
    console.log("users", users);
    res.json(users);
  });
};

module.exports = {
  getAllUsers,
};
