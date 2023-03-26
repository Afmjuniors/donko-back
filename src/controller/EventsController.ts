import { Request, Response } from "express"
import { EventsBusiness } from "../Business/EventsBusiness"
import { EventDTO } from "../dto/EventDTO"
import { BaseError } from "../error/BaseError"

export class EventsController {
    constructor(
        private eventDTO: EventDTO,
        private eventsBusiness: EventsBusiness,
    ) { }

    public getEvents = async (req: Request, res: Response) => {
        try {
            const input = req.query.id as string
            const output = await this.eventsBusiness.getEvents(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public createEvent = async (req: Request, res: Response) => {
        try {
            const input = this.eventDTO.CreateEventInputDTO(
                req.headers.authorization,
                req.params.id,
                req.body.isAvalible,
                req.body.name,
                req.body.price,
                req.body.adress,
                req.body.type,
                req.body.category,
                req.body.linksSales,
                req.body.about,
                req.body.image,
                req.body.startAt
            )

            const output = await this.eventsBusiness.createEvent(input)


            res.status(201).send(output)

        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public editEvent = async (req: Request, res: Response) => {
        try {
            const input = this.eventDTO.EditEventInputDTO(
                req.headers.authorization,
                req.params.id,
                req.body.isAvalible,
                req.body.price,
                req.body.startAt
            )

            const output = await this.eventsBusiness.editEvent(input)


            res.status(201).send(output)

        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public deleteEvent= async (req: Request, res: Response) => {
        try {
            const input = this.eventDTO.DeleteEventInputDTO(
                req.headers.authorization,
                req.params.id
            )

            const output = await this.eventsBusiness.deleteEvent(input)


            res.status(201).send(output)

        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

}