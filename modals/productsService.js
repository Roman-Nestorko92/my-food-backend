const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const productsPath = path.join(__dirname, "products.json");

const listProducts = async () => {
  const data = await fs.readFile(productsPath);
  return JSON.parse(data);
};

const getProductById = async (id) => {
  const products = await listProducts();
  const result = products.find((i) => i.id === id);
  return result || null;
};

const removeProduct = async (id) => {
  const products = await listProducts();
  const index = products.findIndex((index) => index.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = products.splice(index, 1);
  await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
  return result;
};

const addProduct = async ({ name, price, avatar }) => {
  const products = await listProducts();
  const newProduct = {
    id: nanoid(),
    name,
    price,
    avatar,
  };
  products.push(newProduct);
  await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
  return newProduct;
};

const updateProduct = async (id, body) => {
  const products = await listProducts();
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  products[index] = { id, ...body };
  await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
  return products[index];
};

module.exports = {
  listProducts,
  getProductById,
  removeProduct,
  addProduct,
  updateProduct,
};
