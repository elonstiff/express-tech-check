import express from "express";
import { verifyJwt } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["😀", "😳", "🙄"]);
});

// Protected route that requires JWT
router.get("/protected", verifyJwt, (req, res) => {
  res.json({
    message: "You accessed a protected emoji route!",
    emojis: ["🔒", "🛡️", "✅", "🎉"],
    user: req.user
  });
});

export default router;
