import Tokenizer from './TokenHelper';
import User from '../models/user';

module.exports = {
  isLoggedIn: (req) => {
    let isLoggedIn = false;

    isLoggedIn = Tokenizer.verifyAccessToken(req);

    return isLoggedIn;
  },
  isAdminUser: async (userId) => {
    let isAdmin = false;
    const user = await User.findOne({ userId });

    if (user.role === 'Admin') {
      isAdmin = true;
    }

    return isAdmin;
  },
};
