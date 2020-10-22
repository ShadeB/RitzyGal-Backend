import authResolver from './auth';

const rootResolver = {
  ...authResolver,
};

module.exports = rootResolver;
