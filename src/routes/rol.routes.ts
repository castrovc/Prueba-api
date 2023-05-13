import { Router } from "express";
import RolController from "../controllers/rol.controller";

import { checkAuth } from "../verifyToken/verify";

const router = Router()
const rol = RolController

router.post("/", rol.createRol)
router.get("/",checkAuth, rol.getRoles)
router.get("/:id", rol.getRol)
router.put("/:id", rol.updateRol)
router.delete("/:id", rol.deleteRol)

export default router