import express from "express";
import { getUser } from "../controllers/user.js";

const router = express.Router();
router.get("/get/:userId", getUser);
export default router;
