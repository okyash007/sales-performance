const express = require("express");

const {
  addProduct,
  getAllData,
  getProductbyId,
  deleteProduct,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getAllData);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.get("/:id", getProductbyId);

module.exports = productRouter;
