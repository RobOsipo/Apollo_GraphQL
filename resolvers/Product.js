// const categories = require('../dummy-data/dummy-categories')

exports.Product = {
    category: (parent, args, context) => {
      const { categoryId } = parent;
      const {categories} = context
      return categories.find((category) => category.id === categoryId);
    },
  }