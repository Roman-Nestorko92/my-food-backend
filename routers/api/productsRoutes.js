const express = require("express");
const router = express.Router();
const schemas = require("../../schemas/productsSchemas");
const { validateBody } = require("../../utils");
const productsControllers = require("../../controllers/ProductControllers");

router.get("/", productsControllers.getAllProducts);

router.get("/:id", productsControllers.getOneProduct);

router.post(
  "/",
  validateBody(schemas.addSchema),
  productsControllers.postAddProduct
);

router.put(
  "/:id",
  validateBody(schemas.addSchema),
  productsControllers.putUpdateProduct
);

router.delete("/:id", productsControllers.removeProduct);

module.exports = router;
