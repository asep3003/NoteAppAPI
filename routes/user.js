module.exports = (app) => {
  const Controller = require("../controllers/userController.js")

  var router = require("express").Router()

  router.get("/", Controller.get)
  router.post("/post", Controller.post)
  router.post("/register", Controller.register)
  router.post("/login", Controller.login)

  app.use("/api/users", router)
}