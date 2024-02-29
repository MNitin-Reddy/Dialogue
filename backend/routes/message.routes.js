import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controllers.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute ,sendMessage); //add the sendMessage controller
//protectRoute - check if user is logged in or not - to our app - authorisation.

export default router;