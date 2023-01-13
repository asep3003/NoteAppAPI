module.exports = (app) => {
  const Controller = require("../controllers/noteController.js")

  var router = require("express").Router()

  router.get("/", Controller.get)
  router.get("/detail", Controller.detail)
  router.post("/post", Controller.post)

  app.use("/api/notes", router)
}