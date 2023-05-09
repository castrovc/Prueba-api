import dotenv from 'dotenv'
import { Router } from 'express'

//importar entidades
import routerUser from './user.routes'
import routerRol from './rol.routes'


dotenv.config()
const URL = process.env.URL

const router = Router()

//rutas
router.use(`${URL}/user`, routerUser),
router.use(`${URL}/rol`, routerRol)

export default router
