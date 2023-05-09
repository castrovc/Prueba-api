import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router()
const user = UserController

router.post("/", user.createUser),
router.get("/", user.getUsers),
router.get("/:id", user.getUser),
router.put("/:id", user.updateUser),
router.delete("/:id", user.deleteUser)


export default router