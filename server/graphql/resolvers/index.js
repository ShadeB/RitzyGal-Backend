import authResolver from './auth';
import addProductResolver from './addProduct';

const rootResolver = {
  ...authResolver,
  ...addProductResolver,
};

module.exports = rootResolver;
