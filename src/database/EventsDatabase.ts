import { User } from "../models/User"
import { EditEventDB, EventDB, UserDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class EventsDatabase extends BaseDatabase {
    public static TABLE_USER = "events"


    public getAllEvents = async (): Promise<EventDB[]> => {
        const result = await BaseDatabase
            .connection(EventsDatabase.TABLE_USER)
        return result
    }

    public getEventById = async (id:string): Promise<EventDB> => {
        const [result] = await BaseDatabase
            .connection(EventsDatabase.TABLE_USER)
            .where({id})
        return result
    }

    public createEvent =async (event:EventDB):Promise<void> => {
        await BaseDatabase
        .connection(EventsDatabase.TABLE_USER)
        .insert(event)
    }
    public editEvent =async (toEdit:EditEventDB,id:string):Promise<void> => {
        await BaseDatabase
        .connection(EventsDatabase.TABLE_USER)
        .update(toEdit)
        .where({id})
    }
    public deleteEvent  =async (id:string):Promise<void> => {
        await BaseDatabase
        .connection(EventsDatabase.TABLE_USER)
        .del()
        .where({id})
    }

}