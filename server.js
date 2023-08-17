// rkncO6c2bJquGQoi
const mongoose = require("mongoose");
const app = require("./app");

const { db_host } = process.env;

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
