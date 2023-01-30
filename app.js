import express from "express";
import { ProductManager } from "./ProductManager.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager("./products.json");

app.get("/products", (req, res) => {
  let products = productManager.getProducts();
  if (req.query.limit && !isNaN(req.query.limit)) {
    products = products.slice(0, req.query.limit);
  }
  return res.json(products);
});

app.get("/products/:pid", (req, res) => {
  if (req.params.pid && !isNaN(req.params.pid)) {
    const product = productManager.getProductById(req.params.pid);
    return res.json(product);
  } else {
    return res.status(200).json({ error: "error" });
  }
});

app.listen(8080, () => {
  console.log("servidor 8080");
});
