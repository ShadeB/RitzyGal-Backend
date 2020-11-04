import Product from '../../models/product';

module.exports = {
  listAllProducts: async () => {
    const products = await Product.find();

    if (!products) {
      throw Error('Products unavailable');
    }

    return products.map((product) => ({
      // eslint-disable-next-line no-underscore-dangle
      ...product._doc,
      price: parseFloat(product.price),
      rating: parseFloat(product.rating),
      colors: [...product.colors],
    }));
  },
};
