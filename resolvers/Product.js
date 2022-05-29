// const categories = require('../dummy-data/dummy-categories')

exports.Product = {
    category: (parent, args, context) => {
      const { categoryId } = parent;
      const {categories} = context
      return categories.find((category) => category.id === categoryId);
    },
    reviews: (parent, args, context) => {
        const {reviews} = context
        const {id} = parent
       return reviews.filter((review) => review.productId === id)
    }
  }