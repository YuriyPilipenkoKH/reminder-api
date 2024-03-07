
const { Schema, model } = require('mongoose')
const TaskModel = require('./Task')

const CollectionSchema = new Schema({
    name: {type: String, required: true},
    userId: {type: String, required: true},
    color: {type: String, required: false},
    createdAt: {type: Date, required: true},
    tasks: {type: [], required: true},

})

const CollectionModel = model('Collection', CollectionSchema)

module.exports = CollectionModel