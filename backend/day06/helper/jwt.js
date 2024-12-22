const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    const secretKey = 'yourSecretKey';
    const options = {
        expiresIn: '1h',
    };
    const token = jwt.sign(payload, secretKey, options);
    console.log(token)

    return token;
};

const validateToken = (req, res, next) => {
    const authHeader = req.headers.token;
  
    if (authHeader) {
    //   const token = authHeader.split(' ')[1]; 
      
      jwt.verify(authHeader, 'yourSecretKey', (err, payload) => {
        if (err) {
          return res.status(403).json({
            success: false,
            message: 'Invalid token',
          });
        } else {
          req.user = payload;
          next();
        }
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Token is not provided',
      });
    }
  };
module.exports = {
    generateToken,
    validateToken
};