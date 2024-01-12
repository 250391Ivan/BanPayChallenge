const { Router } = require("express");
const router = Router();
const {
  AllUsers,
  MakeUsers,
  OnlyUser,
  UpdateDatUser,
} = require("../controllers/usersController");

//Make routes  for endpoints CRUD
router.post("/MakeUser", MakeUsers);
router.get("/AllUsers", AllUsers);
router.get("/UniqueUser/:id", OnlyUser);
router.post("/UpdateUser", UpdateDatUser);

module.exports = router;
