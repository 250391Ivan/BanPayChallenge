const { Router } = require("express");
const router = Router();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");
const fs = require("fs");
const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);
//Add path  for  using  swagger
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = router;
