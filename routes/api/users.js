const express = require('express');
const { listUsers, getUserById, getUserByName, getUserByEmail, removeUser, addUser } = require('../../controllers/users');
const { isValidId } = require('../../middlewares');



const usersRouter = express.Router()

usersRouter.get("/", listUsers );

usersRouter.get("/:id", isValidId, getUserById)

usersRouter.get("/name/:name",  getUserByName)

usersRouter.get("/email/:email",  getUserByEmail)

usersRouter.delete("/:id", isValidId,  removeUser)

usersRouter.post("/",   addUser)

module.exports = usersRouter