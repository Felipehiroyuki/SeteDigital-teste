import { Router } from 'express'
import userController from '../controllers/user.controller'

const apiRoutes = Router().use(userController)

export default Router().use('/api', apiRoutes)
