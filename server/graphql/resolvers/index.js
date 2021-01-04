import authResolver from './auth';
import addProductResolver from './addProduct';
import listProductsResolver from './listAllProducts';
import productByIdResolver from './productById';

const rootResolver = {
  ...authResolver,
  ...addProductResolver,
  ...listProductsResolver,
  ...productByIdResolver,
};

module.exports = rootResolver;
