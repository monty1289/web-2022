const router = require("express").Router()
let index_controller = require("../controllers/index")

router.get("/", index_controller.index)
.get("/mens", index_controller.mens)
.get("/womens", index_controller.womens)
.get("/boys", index_controller.boys)
.get("/girls", index_controller.girls)
.get("/electronics", index_controller.electronics)



module.exports = router