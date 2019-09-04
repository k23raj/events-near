const express=require('express')
const router=express.Router()
const categoriesController=require('../app/controllers/categoriesController')
const authenticateUser = require('../app/middlewares/authentication')
const eventsController = require('../app/controllers/eventController')
const bookingController = require('../app/controllers/bookingController')
const userController=require('../app/controllers/userController')
const citiesController=require('../app/controllers/cityController')
// router.get('/notes',authenticateUser,notesController.list)
// router.get('/notes/:id',authenticateUser, notesController.show)
// router.post('/notes',authenticateUser ,notesController.create)
// router.put('/notes/:id',authenticateUser ,notesController.update)
// router.delete('/notes/:id',authenticateUser ,notesController.destroy)


router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id',  categoriesController.show)
router.put('/categories/:id',  categoriesController.update)
router.delete('/categories/:id', categoriesController.destroy)

router.get('/cities', citiesController.list)
router.post('/cities', citiesController.create)
router.get('/cities/:id',  citiesController.show)
router.put('/cities/:id',  citiesController.update)
router.delete('/cities/:id', citiesController.destroy)

router.get('/events', eventsController.list)
router.post('/events',authenticateUser, eventsController.create)
router.get('/events/:id', eventsController.show)
router.delete('/events/:id', authenticateUser, eventsController.destroy)

router.get('/booking',authenticateUser, bookingController.list)
router.post('/booking',authenticateUser, bookingController.create)
router.get('/booking/:id', authenticateUser, bookingController.show)
router.delete('/booking/:id', authenticateUser, bookingController.destroy)



router.post('/users/login', userController.login)
router.post('/users/register', userController.create)
router.get('/users/account',authenticateUser,userController.account)
router.delete('/users/logout',authenticateUser, userController.logout)

module.exports=router