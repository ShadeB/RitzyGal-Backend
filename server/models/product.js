import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  sizes: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  instock: { type: Boolean, required: true },
  rating: { type: mongoose.Types.Decimal128, required: true },
  colors: [
    {
      _id: false,
      name: { type: String, required: true },
      Hex: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Product', ProductSchema);
