
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    try {
      if (fs.existsSync(path)) {
        const products = JSON.parse(fs.readFileSync(path, "utf-8"))
        console.log("hay stock del producto")
        return products;
      } else {
        console.log("no hay stock del producto")
      }
    } catch (error) {
      console.log(error);
    }
    return this.path;
  }

  async addProduct(produtcs) {
    try {
      const { title, description, price, thumbnail, code, stock } = produtcs;
      const product = {
        id: this.#generarId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      const productFile = await this.getProducts();
      productFile.push(product);
      this.path.push(product);
      await fs.promises.writeFile(path, JSON.stringify(productFile));
    } catch (error) {
      console.log(error);
    }
  }

  deletFileProducts(parametro) {
    if (parametro === "si") {
      fs.unlinkSync(path);
    }
  }

  getProductById(id) {
    return (
      this.path.find((propiedad) => propiedad.id === id) ||
      `producto con el id ${id} no existe`
    );
  }
  updateProduct(id, title) {
    const actualizar = this.path.find((prop) => prop.id === id);
    return (actualizar.title = title);
  }

  deleteProduct(id) {
    return this.path.filter((elemente) => elemente.id !== id);
  }

  #generarId() {
    const count = this.path.length;
    const idIncre = count > 0 ? this.path[count - 1].id + 1 : 1;
    return idIncre;
  }
}

export { ProductManager };



/* const manager = new ManagerUsuarios(); */
/* const usuario1 = {
  title: "plato principal",
  description: "pollo al horno",
  price: 900,
  thumbnail: "../image/1.jpg",
  code: 1111,
  stock: 2,
};
const usuario2 = {
  title: "postre",
  description: "helado de frutilla",
  price: 400,
  thumbnail: "../image/2.jpg",
  code: 2222,
  stock: 5,
};
const usuario3 = {
  title: "merienda",
  description: "cafe con 3 medialunas",
  price: 200,
  thumbnail: "../image/3.jpg",
  code: 3333,
  stock: 200,
}; */
/* async function consoleProyecto() {
  console.log(await manager.getProducts());

  await manager.addProduct(usuario1);
  await manager.addProduct(usuario2);
  await manager.addProduct(usuario3);

  console.log("si existe", manager.getProductById(1));
  console.log(manager.getProductById(5));
  console.log("actualizado", manager.updateProduct(1, "canc"));
  console.log(manager.deleteProduct(2));
}

consoleProyecto(); */
