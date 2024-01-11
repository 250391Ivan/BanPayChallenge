const { Router } = require("express");
const router = Router();
const { AllUsers, MakeUsers } = require("../controllers/usersController");

//Make routes  for endpoints
router.post("/MakeUser", MakeUsers);
router.get("/AllUsers", AllUsers);

module.exports = router;
