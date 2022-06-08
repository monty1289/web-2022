const router = require("express").Router()
let mens_controller = require("../controllers/mens")

router.get("/", mens_controller.index)

module.exports = router