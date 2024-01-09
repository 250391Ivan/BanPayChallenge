const { Router } = require("express");
const router = Router();

//Make routes  for endpoints
router.get("/", (req, res) => {
  res.send("Firts  method");
});
router.get("/getUsers", (req, res) => {
  res.send("getUsers");
});

module.exports = router;
