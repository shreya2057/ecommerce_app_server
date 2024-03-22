import User from "../model/user_model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

function generateAccessToken(userId) {
  return jwt.sign({ userId }, "access_secret", { expiresIn: "15m" });
}

function generateRefreshToken(userId) {
  return jwt.sign({ userId }, "refresh_secret", { expiresIn: "7d" });
}

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: "Authentication failed" });
      return;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ error: "Password did not match" });
      return;
    }
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: "Refresh token not provided" });
    }
    jwt.verify(refreshToken, "refresh_secret", (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Invalid refresh token" });
      }
      const accessToken = generateAccessToken(decoded.userId);
      res.json({ accessToken });
    });
  } catch (error) {
    res.status(500).json({ error: "Refresh token error occured" });
  }
};

export default { signup, login, refreshToken };
