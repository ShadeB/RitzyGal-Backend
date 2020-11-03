import isAuth from '../../helpers/isAuth';
import Product from '../../models/product';

module.exports = {
  addProduct: async (args, req) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.split(' ')[1] || '';
    const { userId } = token;
    const isLoggedIn = isAuth.isLoggedIn(req);
    const isAdmin = isAuth.isAdminUser(userId);
    const Arguments = { ...args.productInput };
    const { name, description, category, price, sizes, image, brand, instock, rating } = Arguments;
    const colorEntry = { ...Arguments.colors };
    const colorsInput = { ...colorEntry };
    const colorsObject = JSON.parse(JSON.stringify(colorsInput));
    const colors = Object.values(colorsObject);
    if (!isLoggedIn || !isAdmin) {
      throw Error('Unauthorized action: You need to sign in as an admin to perform this action');
    }

    const productData = {
      name,
      description,
      category,
      price,
      sizes,
      image,
      brand,
      instock,
      rating,
      colors,
    };
    const product = new Product(productData);

    const result = await product.save();

    if (!result) {
      throw Error('Failed to save product');
    }

    // eslint-disable-next-line no-underscore-dangle
    const createdProduct = { ...result._doc };

    return {
      _id: result.id,
      name: createdProduct.name,
      description: createdProduct.description,
      category: createdProduct.category,
      price: parseFloat(createdProduct.price),
      sizes: createdProduct.sizes,
      image: createdProduct.image,
      brand: createdProduct.brand,
      instock: createdProduct.instock,
      rating: parseFloat(createdProduct.rating),
      colors: createdProduct.colors,
    };
  },
};
