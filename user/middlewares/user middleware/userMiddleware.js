const jwt = require("jsonwebtoken");
const User = require("../../models/pharmacist");

const userAuth = async (req, res, next) => {

  console.log(req.url,req.headers)
  if (((req.method == "POST") &&(req.url == '/users/user/register'|| req.url == '/users/user/login' ||
   req.url == "/users/contactUs")) || req.url.includes('static')) {

    next();
    return;
  }
  const { authorization } = req.headers;
  const payload = await jwt.verify(authorization, process.env.SECRET);
  User.findOne({ username: payload.username }).then((user) => {
    req.user = user;
    next();
  });
};

module.exports = userAuth;
