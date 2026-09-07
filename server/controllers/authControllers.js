import { User } from "../models/User";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";

//Helper to set cookie
const setSessionCookie = (req, payload) => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    path: "/",
  });
};

export async function register(req, res) {
  const { name, email, password } = req.body;

  if ((!name, !email, !password)) {
    res.status(400).json({ error: "Name, email and password are required" });
    return;
  }

  const trimmedEmail = email.toLowerCase().trim();
  const existing = await User.findOne({ email: trimmedEmail });
  if (existing) {
    res.status(400).json({ error: "An account with this email already exists" });
    return;
  }

  const user = await User.create({
    name,
    email: trimmedEmail,
    password,
  });

  setSessionCookie(res, { userId: user._id.toString(), email: user.email });

  res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
}
export async function login(req, res) {}
export async function logout(req, res) {}
export async function me(req, res) {}
