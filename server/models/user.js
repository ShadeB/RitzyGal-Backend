import { mongoose, Schema } from 'mongoose';

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin_user: { type: Boolean },
});

module.exports = mongoose.model('User', userSchema);
