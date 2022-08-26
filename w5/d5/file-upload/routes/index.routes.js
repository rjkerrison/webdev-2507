const router = require("express").Router()

router.get("/", (req, res, next) => {
	res.send("Everything is fine here!")
})

router.use("/cats", require("./cats.routes.js"))

router.use("/auth", require("./auth.routes.js"))

module.exports = router
