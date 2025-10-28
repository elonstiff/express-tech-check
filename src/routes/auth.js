import { Router } from "express";
import { login, register, profile } from "../controllers/authController.js";
import { verifyJwt } from "../middleware/jwt.js";

const r = Router();

// Public routes
r.post("/login", login);
r.post("/register", register);

// Protected routes
r.get("/ping", verifyJwt, (req, res) => {
  res.json({ ok: true, user: req.user });
});
r.get("/profile", verifyJwt, profile);

export default r;
