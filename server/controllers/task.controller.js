const Task = require('../models/task.model');

module.exports = {

    index: (req,res) => {
        Task.find()
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    create: (req,res) => {
        Task.create(req.body)
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    show: (req,res) => {
        Task.findById({_id:req.params.id})
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    update: (req,res) => {
        Task.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true, useFindAndModify:true, context: 'query'})
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    destroy: (req,res) => {
        Task.deleteOne({_id: req.params.id})
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },

}