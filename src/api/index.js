import express from "express";
import checkSwaggerCli from "swagger-express-cli";

import emojis from "./emojis.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

checkSwaggerCli();

router.use("/emojis", emojis);

export default router;
