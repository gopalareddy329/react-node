
const { getEventsController,createEventController } = require("./events.controller")
const Router = require("express")
const eventsRouter = Router()
eventsRouter.get("/getEvents",getEventsController)
eventsRouter.post("/createEvents",createEventController)
module.exports = {eventsRouter}