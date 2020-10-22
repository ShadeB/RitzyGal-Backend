import jwt from 'jsonwebtoken';

module.exports = {
  signAccessToken: (userId) => {
    const tokenData = {};
    const { ACCESS_TOKEN_KEY } = process.env;
    const options = { expiresIn: '3h' };

    try {
      const token = jwt.sign({ userId }, ACCESS_TOKEN_KEY, options);

      tokenData.userId = userId;
      tokenData.token = token;
      tokenData.tokenDuration = options.expiresIn;

      return tokenData;
    } catch (err) {
      throw Error('Failed to sign jwt key for this user');
    }
  },

  verifyAccessToken: (req) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.split(' ')[1] || '';
    const { ACCESS_TOKEN_KEY } = process.env;
    const tokenNotFound = 'token not found';
    let tokenValidity = false;

    if (!authHeader || authHeader === '') {
      throw Error('unauthenticated user');
    }

    if (!token || token === '' || token.trim() === '') {
      throw new Error(tokenNotFound);
    }

    jwt.verify(token, ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) {
        throw new Error(err.message);
      }

      if (decoded) {
        tokenValidity = true;
      }
    });

    return tokenValidity;
  },
};
