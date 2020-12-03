const db = require('../models') 

const create = (req, res) => {
    db.restaurant.create(req.body)
    .then(newRestaurant => {
        console.log("The new restaurant", newRestaurant)
        res.json(newRestaurant)
    })
}

const deleteRestaurant = (req, res) => {
    db.restaurant.destroy({
        where: {id: req.params.id }
    }).then(()=>res.sendStatus(200))
}

const update = (req, res) => {
    db.restaurant.update(
        req.body,
        {
        where: {id: req.params.id }
    }).then(()=> res.sendStatus(200))
}

const show = (req, res) => {
    db.restaurant.findByPk(req.params.id)
    .then((foundRestaurant)=>{
        res.json(foundRestaurant)
    })
}

const index = (req, res) => {
    db.restaurant.findAll()
    .then((foundRestaurant)=>{
        res.json(foundRestaurant)
    })
}

module.exports ={
    create,
    deleteRestaurant,
    update,
    index,
    show
}