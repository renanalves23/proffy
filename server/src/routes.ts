import express from 'express'
import ClassesController from './controlers/CLassesController'
import ConnectionsController from './controlers/ConnectionsController'


const routes = express()
const classesController = new ClassesController()
const connectionsControler = new ConnectionsController()


routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.get('/connections', connectionsControler.index)
routes.post('/connections', connectionsControler.create)




export default routes