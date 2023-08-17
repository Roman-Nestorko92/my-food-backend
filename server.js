// rkncO6c2bJquGQoi
const mongoose = require("mongoose");
const app = require("./app");

const db_host =
  "mongodb+srv://Roman:rkncO6c2bJquGQoi@cluster0.n1zokeb.mongodb.net/products?retryWrites=true&w=majority";

mongoose
  .connect(db_host)
  .then(() => {
    app.listen(3001);
    console.log("Success database");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
