//Make routes  for endpoints CRUD
const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { FieldsValidate } = require("../middleware/validateFields");
const {
  AllUsers,
  MakeUsers,
  OnlyUser,
  UpdateDatUser,
  DeleteUser,
} = require("../controllers/usersController");

//Create  user
router.post(
  "/MakeUser",
  [
    check("Email", "Email is  mandatory").isEmail(),
    check("IdRol", "IdRol Is  necesary ").not().isEmpty(),
    check("FirstName", "FirstName Is  necesary ").not().isEmpty(),
    check("LastName", "LastName Is  necesary ").not().isEmpty(),
    FieldsValidate,
  ],
  MakeUsers
);
//Read  user
router.get("/AllUsers", AllUsers);
//Read  specific  User
router.get("/UniqueUser/:id", OnlyUser);
//Update  user
router.post(
  "/UpdateUser",
  [
    check("IdUser", "IdUser Is  necesary ").not().isEmpty(),
    check("IdRol", "IdRol Is  necesary ").not().isEmpty(),
    check("FirstName", "FirstName Is  necesary ").not().isEmpty(),
    check("LastName", "LastName Is  necesary ").not().isEmpty(),
    check("Email", "Email is  mandatory").isEmail(),
    FieldsValidate,
  ],
  UpdateDatUser
);
//Delete User
router.delete("/CleanUser", DeleteUser);

module.exports = router;
