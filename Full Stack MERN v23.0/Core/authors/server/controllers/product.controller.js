const Product = require("../models/product.model")

module.exports = {
    getAll: (req,res) => {
        Product.find()
            .then(object=> res.json(object))
            .catch(err=> res.json(err))
    },


    getOne: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then(object=> res.json(object))
            .catch(err=> res.json(err))
    },


    create: (req,res) => {
        Product.create(req.body)
            .then(object=> res.json(object))
            .catch(err=> res.status(400).json(err))
    },


    update: (req,res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then(object=> res.json(object))
            .catch(err=> res.status(400).json(err))
    },

    delete: (req,res) => {
        Product.deleteOne({_id: req.params.id})
            .then(confirm=> res.json(confirm))
            .catch(err=> res.json(err))
    }
}