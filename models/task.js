const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
    content: {type: String, required: true},
    userId: {type: String, required: true},
    collectionId: {type: String, required: true},
    done: {type: Boolean, required: false},
    expiresAt: {type: Date, required: true},
    createdAt: {type: Date, required: true},

})

const TaskModel = model('Task', TaskSchema)

module.exports = TaskModel