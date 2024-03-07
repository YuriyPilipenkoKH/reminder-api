const { User } = require("../../models")


const listUsers = async (_, res) => {
    const result = await User.find()
     res.json(result)
  }

  module.exports =   listUsers