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
  CreateToken,
} = require("../controllers/usersController");
const { validateJWT } = require("../middleware/validatejwt");

//Make  token  fot  py on  headers  petition
router.get("/Token", CreateToken);
//Create  user
router.post(
  "/MakeUser",
  [
    validateJWT,
    check("Email", "Email is  mandatory").isEmail(),
    check("IdRol", "IdRol Is  necesary ").not().isEmpty(),
    check("FirstName", "FirstName Is  necesary ").not().isEmpty(),
    check("LastName", "LastName Is  necesary ").not().isEmpty(),
    FieldsValidate,
  ],
  MakeUsers
);
//Read  user
router.get("/AllUsers", [validateJWT], AllUsers);
//Read  specific  User
router.get("/UniqueUser/:id",[validateJWT], OnlyUser);
//Update  user
router.post(
  "/UpdateUser",
  [
    validateJWT,
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
router.delete("/CleanUser",[validateJWT], DeleteUser);

module.exports = router;
