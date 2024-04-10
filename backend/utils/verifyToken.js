import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorize" });
  }

  //   *if Token is exist then verify the tken
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }

    req.user = user
    next() //? don't forget to call next
  });

};


export const verifyUser