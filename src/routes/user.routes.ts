import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router()
const user = UserController

router.post("/", user.createUser)

export default router