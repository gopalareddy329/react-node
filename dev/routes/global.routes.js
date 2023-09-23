const { eventsRouter } = require("../modules/events/events.router") ;

const Router = require("express");
const globalRouter = Router();
globalRouter.use("/api/events",eventsRouter)

module.exports = {globalRouter};

