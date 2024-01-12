//Make routes  for endpoints CRUD
const { Router } = require("express");
const router = Router();
const {
  AllUsers,
  MakeUsers,
  OnlyUser,
  UpdateDatUser,
  DeleteUser,
} = require("../controllers/usersController");

//Create  user
router.post("/MakeUser", MakeUsers);
//Read  user
router.get("/AllUsers", AllUsers);
//Read  specific  User
router.get("/UniqueUser/:id", OnlyUser);
//Update  user
router.post("/UpdateUser", UpdateDatUser);
//Delete User
router.delete("/CleanUser", DeleteUser);

module.exports = router;
