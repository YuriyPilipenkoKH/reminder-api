const { User } = require("../../models")


const addUser = async (_, res) => {
    const result = await User.create()
     res.json(result)
  }

  module.exports =   addUser