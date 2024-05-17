const crypto = require("crypto");

let secretKey = null;

const generateSecretKey = () => {
  if (!secretKey) {
    const secretBytes = crypto.randomBytes(32);
    secretKey = secretBytes.toString("base64");
  }
  return secretKey;
};

const getSecretKey = () => {
  return secretKey;
};

module.exports = { generateSecretKey, getSecretKey };
