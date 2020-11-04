import authResolver from './auth';
import addProductResolver from './addProduct';
import listProductsResolver from './listAllProducts';

const rootResolver = {
  ...authResolver,
  ...addProductResolver,
  ...listProductsResolver,
};

module.exports = rootResolver;
