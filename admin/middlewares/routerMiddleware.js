const adminMW = require("./store middleware/adminMiddleware");
const userMW = require("./user middleware/userMiddleware");

const routerAuth = (req, res, next) => {
  const route = req.url;
  console.log(req.originalUrl )
  if (route == "/favicon.ico") {
    return next();
  }
  if (route.includes("store")) {
    adminMW(req, res, next);
  } else if (route.includes("users")) {
    userMW(req, res, next);
  } else {
    console.log(req.url);
    next("unknown error");
  }
};

module.exports = routerAuth;
