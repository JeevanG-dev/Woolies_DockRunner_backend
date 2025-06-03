import express from "express";
import { addUser, getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Heelo")
});
router.post("/addUser", addUser);

export default router;
