module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (username === 'prasad' && password === 'prasad123') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Invalid credentials' });
  }
};
