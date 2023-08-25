const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const productsRoutes = require("./routers/api/productsRoutes");
const authRoutes = require("./routers/api/authRoute");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
