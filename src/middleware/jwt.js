import jwt from "jsonwebtoken";
import { env } from "../env.js";

export function verifyJwt(req, res, next) {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing Authorization: Bearer <token>" });

  try {
    const payload = jwt.verify(token, env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}
