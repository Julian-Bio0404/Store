const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      });
    })
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block')
    }
    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    product = this.products[index];
    this.products[index] = {
      ...product,
      ...data
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductService;
