const express = require("express");
const router = express.Router();
const { validateBody } = require("../../utils");
const { schemas } = require("../../modals/product");
const productsControllers = require("../../controllers/ProductControllers");
const { authtificate, isValidId } = require("../../middlewares");

router.use(authtificate);

router.get("/", productsControllers.getAllProducts);

router.get("/:id", isValidId, productsControllers.getOneProduct);

router.post(
  "/",
  validateBody(schemas.addSchema),
  productsControllers.postAddProduct
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  productsControllers.putUpdateProduct
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  productsControllers.putUpdateFavorite
);

router.delete("/:id", isValidId, productsControllers.removeProduct);

module.exports = router;
