import express from "express"
import { EventsBusiness } from "../Business/EventsBusiness"
import { EventsController } from "../controller/EventsController"
import { EventsDatabase } from "../database/EventsDatabase"

import { TokenManager } from "../services/TokenManager"

export const eventsRouter = express.Router()

// const postsDTO = new PostsDTO()

const eventsController = new EventsController(
    new EventsBusiness(
        new EventsDatabase(),
        new TokenManager()
    )
)



eventsRouter.get('/', eventsController.getEvents )




