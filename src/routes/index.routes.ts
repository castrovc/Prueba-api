import dotenv from 'dotenv'
import { Router } from 'express'

//importar entidades
import routerUser from './user.routes'


dotenv.config()
const URL = process.env.URL

const router = Router()

//rutas
router.use(`${URL}/user`, routerUser)

export default router
