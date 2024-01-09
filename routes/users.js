const { Router } = require("express");
const router = Router();
const { getAllUsers } = require("../controllers/usersController");

//Make routes  for endpoints
router.get("/AllUsers", getAllUsers);

module.exports = router;
