import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  // console.log(localStorage.getItem("accessToken"));
  // const token = JSON.parse(localStorage.getItem("accessToken"));

  console.log(token);
  console.log("inside verify token");
  if (!token) {
    console.log("token not found");
    return res
      .status(401)
      .json({ success: false, message: "You're not authorize" });
  }

  //   *if Token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log("token not exist");
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }

    req.user = user;
    console.log(user);
    next(); //? don't forget to call next
  });
};

export const verifyUser = (req, res, next) => {
  console.log("checking user");
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      console.log("user checked");
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're Not Authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  // console.log("checking admin");
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      // console.log("admin checked");
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're Not Authorized" });
    }
  });
};
