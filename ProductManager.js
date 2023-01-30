import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");

const path = "./products.json";

class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts() {
    if (fs.existsSync(path)) {
      const products = JSON.parse(fs.readFileSync(path, "utf-8"));
      console.log("el producto existe");
      return products;
    } else {
      console.log("el producto no existe");
    }
  }
  addProduct(productNew) {
    const { title, description, price, thumbnail, code, stock } = productNew;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
    } else {
      if (this.checkCode(code)) {
      } else {
        const product = {
          id: this.#addId(),
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        const productsFile = this.getProducts();
        productsFile.push(product);
        fs.writeFileSync(path, JSON.stringify(productsFile));
      }
    }
  }

  getProductById(id) {
    try {
        const products = this.getProducts();
        if (!products) {
            throw new Error("El archivo no existe");
        }
        const product = products.find((p) => p.id === parseInt(id));
        if (product) {
            return product;
        }
        else {
            throw new Error("El producto no existe");
        }
    }
    catch (error) {
        console.log(error);
    }
}

  deleteProduct(id) {
    const products = this.getProducts();
    const newList = products.filter((product) => product.id !== id);
    fs.writeFileSync(path, JSON.stringify(newList));
    console.log("Producto eliminado");
  }

  deleteAllProducts() {
    if (fs.existsSync(this.path)) {
      fs.unlink(this.path);
      console.log("todos los productos eliminados");
    }
  }

  checkCode(cCode) {
    const products = this.getProducts();
    return products.find((product) => product.code === cCode);
  }

  #addId() {
    let id = 1;
    const products = this.getProducts();
    if (products.length !== 0) {
      id = products[products.length - 1].id + 1;
    }
    return id;
  }
}

export { ProductManager };
