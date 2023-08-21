const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../utils");
const { Product } = require("../modals/product");

const getAllProducts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Product.find(
    { owner },
    "-createdAt -updatedAt"
  ).populate("owner", "name");
  res.json(result);
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json(result);
};

const postAddProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const add = await Product.create({ ...req.body, owner });
  res.status(201).json(add);
};

const putUpdateProduct = async (req, res) => {
  const { id } = req.params;
  const update = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!update) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json(update);
};

const putUpdateFavorite = async (req, res) => {
  const { id } = req.params;
  const update = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!update) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json(update);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const deleter = await Product.findByIdAndDelete(id);
  if (!deleter) {
    throw HttpError(400);
  }
  res.json({ message: "Delete success" });
};

module.exports = {
  getAllProducts: ctrlWrapper(getAllProducts),
  getOneProduct: ctrlWrapper(getOneProduct),
  postAddProduct: ctrlWrapper(postAddProduct),
  putUpdateProduct: ctrlWrapper(putUpdateProduct),
  putUpdateFavorite: ctrlWrapper(putUpdateFavorite),
  removeProduct: ctrlWrapper(removeProduct),
};
