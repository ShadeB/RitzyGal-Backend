import mongoose, { Schema } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin_user: { type: Boolean },
});

// eslint-disable-next-line
userSchema.pre('save', async function (next) {
  const document = this;

  // only hash the password if the document is new
  // or password has been changed
  if (document.isNew || document.isModified('password')) {
    const hashedPassword = await hash(document.password, 12);
    document.password = hashedPassword;
    next();
  } else {
    return next();
  }
});

module.exports = mongoose.model('User', userSchema);
