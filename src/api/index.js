import express from "express";
import emojis from "./emojis.js";
import InitConfig from "../config/index.js";
import InitConsensus from "../consensus/index.js";
import InitControllers from "../controllers/index.js";
import InitCrypto from "../crypto/index.js";
import InitMiddledware from "../middleware/index.js";
import InitModels from "../models/index.js";
import InitRoutes from "../routes/index.js";
import InitServices from "../services/index.js";
import InitUtils from "../utils/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);

/* Init Configuration */
InitConfig();

/* Init Consensus */
InitConsensus();

/* Init Controllers */
InitControllers();

/* Init Crypto */
InitCrypto();

/* Init Middleware */
InitMiddledware();

/* Init Configuration */
InitModels();

/* Init Routes */
InitRoutes();

/* Init Services */
InitServices();

/* Init Utils */
InitUtils();

export default router;
