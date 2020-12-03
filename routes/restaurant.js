const router = require('express').Router()
const ctrl = require('../controllers')

router.post('/create', ctrl.restaurant.create)
router.delete('/:id', ctrl.restaurant.deleteRestaurant)
router.put('/:id', ctrl.restaurant.update)
router.get('/:id', ctrl.restaurant.show)
router.get('/', ctrl.restaurant.index)

module.exports = router