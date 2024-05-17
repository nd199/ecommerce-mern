const jwt = require("jsonwebtoken");
const { generateOrRetrieveSKey } = require("./config");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "You are not authenticated!" });
  }

  const token = authHeader.split(" ")[1];
  const secretKey = process.env.SECRET_KEY;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("JWT verification error:", err);
      return res.status(401).json({ error: "Failed to authenticate token." });
    }
    req.decoded = decoded;
    console.log("Token verification successful");
    next();
  });
};

const verifyAndAuthorize = (req, res, next) => {
  verifyToken(req, res, () => {
    const { id, isAdmin } = req.decoded;
    const requestedUserId = req.params.id;

    if (id === requestedUserId || isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json({ error: "Unauthorized access. Admin privileges required." });
    }
  });
};

const verifyAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    const { isAdmin } = req.decoded;
    if (isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json({ error: "Unauthorized access. Admin privileges required." });
    }
  });
};

module.exports = { verifyToken, verifyAndAuthorize, verifyAndAdmin };
