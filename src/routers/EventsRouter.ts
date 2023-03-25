import express from "express"
import { EventsBusiness } from "../Business/EventsBusiness"
import { EventsController } from "../controller/EventsController"
import { EventsDatabase } from "../database/EventsDatabase"
import { EventDTO } from "../dto/EventDTO"
import { IdGenerator } from "../services/IdGenerator"

import { TokenManager } from "../services/TokenManager"

export const eventsRouter = express.Router()

// const postsDTO = new PostsDTO()

const eventsController = new EventsController(
    new EventDTO(),
    new EventsBusiness(
        new EventsDatabase(),
        new IdGenerator(),
        new TokenManager()
    )
)



eventsRouter.get('/', eventsController.getEvents )
eventsRouter.post('/:id', eventsController.createEvent )
eventsRouter.patch('/:id', eventsController.editEvent )
eventsRouter.delete('/:id', eventsController.deleteEvent )




