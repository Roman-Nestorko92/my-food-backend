const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  price: Number,
  name: String,
  avatar: String,
});

const Product = model("product", productSchema);

module.exports = Product;
