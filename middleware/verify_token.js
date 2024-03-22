function verifyAccessToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access token not provided" });
  }
  jwt.verify(token, "access_secret", (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid access token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

export default verifyAccessToken;
