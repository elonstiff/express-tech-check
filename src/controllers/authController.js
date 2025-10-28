// src/controllers/authController.js
import jwt from "jsonwebtoken";
import { env } from "../env.js";

export const login = (req, res) => {
  const { username, password } = req.body || {};
  const expectedUser = env.AUTH_USERNAME || "admin";
  const expectedPass = env.AUTH_PASSWORD || "12345";

  if (username === expectedUser && password === expectedPass) {
    const payload = { sub: username, role: "user" };
    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: "1h",
      issuer: "express-tech-check",
    });
    return res.json({ token, expiresIn: 3600 });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};

export const register = (req, res) => {
  const { username, password } = req.body || {};
  
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // In a real app, you'd store this in a database with hashed password
  // For demo purposes, we'll just return success and allow registration
  const payload = { sub: username, role: "user" };
  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: "1h",
    issuer: "express-tech-check",
  });
  
  return res.status(201).json({ 
    message: "User registered successfully",
    token, 
    expiresIn: 3600 
  });
};

export const profile = (req, res) => {
  // This endpoint requires authentication
  res.json({ 
    message: "User profile",
    user: req.user 
  });
};
