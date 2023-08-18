const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../utils");
const Product = require("../modals/product");

const getAllProducts = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

// const getOneProduct = async (req, res) => {
//   const { id } = req.params;
//   const result = await productservice.getProductById(id);
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

// const postAddProduct = async (req, res) => {
//   const add = await productservice.addProduct(req.body);
//   res.status(201).json(add);
// };

// const putUpdateProduct = async (req, res) => {
//   const { id } = req.params;
//   const update = await productservice.updateProduct(id, req.body);
//   if (!update) {
//     throw HttpError(400);
//   }
//   res.json(update);
// };

// const removeProduct = async (req, res) => {
//   const { id } = req.params;
//   const deleter = await productservice.removeProduct(id);
//   if (!deleter) {
//     throw HttpError(400);
//   }
//   res.json({ message: "contact deleted" });
// };

module.exports = {
  getAllProducts: ctrlWrapper(getAllProducts),
  // getOneProduct: ctrlWrapper(getOneProduct),
  // postAddProduct: ctrlWrapper(postAddProduct),
  // putUpdateProduct: ctrlWrapper(putUpdateProduct),
  // removeProduct: ctrlWrapper(removeProduct),
};
