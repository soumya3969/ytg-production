import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// * User Registration
export const register = async (req, res) => {
  try {
    // * Hashing Password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.userName,
      email: req.body.email,
      password: hash,
      photo: req.body.photo
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully User Created"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed To Create User.Try Again."
    });
  }
};

// * User Login
export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    // * if user does not  exist
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // * If user is exist then check the password or compare the password.
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // * if password is incorrect
    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Email or Password."
      });
    }

    const { password, role, ...rest } = user._doc;

    // * Create Jwt Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    //* set token in the browser cookies and send the respond to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to Login"
    });
  }
};
