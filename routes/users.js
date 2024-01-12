const { Router } = require("express");
const router = Router();
const {
  AllUsers,
  MakeUsers,
  OnlyUser,
} = require("../controllers/usersController");

//Make routes  for endpoints
router.post("/MakeUser", MakeUsers);
router.get("/AllUsers", AllUsers);
router.get("/UniqueUser/:id", OnlyUser);

module.exports = router;
