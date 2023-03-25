import { Request, Response } from "express"
import { EventsBusiness } from "../Business/EventsBusiness"
import { BaseError } from "../error/BaseError"

export class EventsController{
    constructor(
private eventsBusiness: EventsBusiness,
    ){}

    public getEvents = async (req:Request,res:Response) =>{
        try {

            const output = await this.eventsBusiness.getEvents()


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
    
}