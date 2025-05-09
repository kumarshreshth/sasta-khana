export const isAuthenticated = (req, res, next) => {
  const token = req.cookies?.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Not logged in' });
  }
  next();
};
