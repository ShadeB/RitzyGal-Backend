import { compare } from 'bcrypt';

import User from '../../models/user';
import Tokenizer from '../../helpers/TokenHelper';

const userRoles = {
  ADMIN: 'Admin',
  USER: 'User',
};

module.exports = {
  signup: async (args) => {
    try {
      const Arguments = { ...args.userInput };
      const { name, email, password } = Arguments;
      const userExists = await User.findOne({ email });
      let AuthPayload = {};

      if (userExists) {
        throw new Error('Account already exists');
      }

      const { ADMIN_EMAIL } = process.env;
      let role = userRoles.USER;

      if (email === ADMIN_EMAIL) {
        role = userRoles.ADMIN;
      }

      const user = new User({
        name,
        email,
        password,
        role,
      });

      const result = await user.save();

      if (!result) {
        throw new Error('Signup failed');
      }

      AuthPayload = await Tokenizer.signAccessToken(result.id);
      return AuthPayload;
    } catch (err) {
      throw new Error(err);
    }
  },
  login: async (args, req) => {
    const Arguments = { ...args };
    const { email, password } = Arguments;
    let AuthPayload = {};
    let validToken = false;
    const loginErrorMessage = 'Incorrect login credentials, please try again';

    const userExists = await User.findOne({ email });

    if (!userExists) {
      throw new Error(loginErrorMessage);
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error(loginErrorMessage);
    }

    validToken = await Tokenizer.verifyAccessToken(req);

    if (!validToken) {
      AuthPayload = await Tokenizer.signAccessToken(userExists.id);
    }

    AuthPayload = await Tokenizer.signAccessToken(userExists.id);
    return AuthPayload;
  },
};
