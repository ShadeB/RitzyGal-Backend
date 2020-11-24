import Product from '../../models/product';

module.exports = {
  findProductById: async ({ id }) => {
    const result = await Product.findById(id);

    if (!result) {
      throw Error('Product not found');
    }

    return {
      // eslint-disable-next-line no-underscore-dangle
      ...result._doc,
      price: parseFloat(result.price),
      rating: parseFloat(result.rating),
      colors: [...result.colors],
    };
  },
};
