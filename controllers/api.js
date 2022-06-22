const users = require("../data/users.json")

exports.index = (req, res) => res.send("Please refer to the docs on how to use this API")
exports.users = (req, res) => res.send(users)
exports.oneUser = (req, res) => res.send(users[0])