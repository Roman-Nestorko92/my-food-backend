// rkncO6c2bJquGQoi
const mongoose = require("mongoose");
const app = require("./app");

const { db_host, PORT = 3001 } = process.env;

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
