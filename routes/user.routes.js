import express from "express";
import { addUser, getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post('/addUser',addUser)

export default router;
 