const categories = require('../dummy-data/dummy-categories')
const products = require('../dummy-data/dummy-products')


exports.Query = {
    hello: (parent, args, context) => {
      return "World";
    },
    products: (parent, args, context) => {
      return products;
    },
    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id === id);
    },
    categories: (parent, args, context) => {
      return categories;
    },
    category: (parent, args, context) => {
      const { id } = args;
      // if mongo was here.....
      // .findById(id)
      return categories.find((category) => category.id === id);
    },
  }