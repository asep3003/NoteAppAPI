module.exports = (app) => {
  const Controller = require("../controllers/salesRecordController.js")

  var router = require("express").Router()

  router.get("/", Controller.get)
  router.post("/post", Controller.post)

  app.use("/api/sales-records", router)
}