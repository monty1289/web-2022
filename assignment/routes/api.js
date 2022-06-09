const router = require("express").Router()
let api_controller = require("../controllers/api")

router
    .get("/", api_controller.index)
    .get("/users", api_controller.users)
    .get("/users/1", api_controller.oneUser)

module.exports = router