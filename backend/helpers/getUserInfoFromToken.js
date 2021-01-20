const jwt = require("jsonwebtoken");
const getUserInfoFromToken = async (token) => {
  try {
    return jwt.verify(token, "kkkajash98sh9snuiusuh9shsbsjs");
  } catch (error) {
    return null;
  }
};

module.exports = getUserInfoFromToken;
