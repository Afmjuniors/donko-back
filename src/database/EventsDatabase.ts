import { User } from "../models/User"
import { UserDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class EventsDatabase extends BaseDatabase {
    public static TABLE_USER = "events"


    public getAllEvents = async (): Promise<UserDB[]> => {
        const result = await BaseDatabase
            .connection(EventsDatabase.TABLE_USER)
        return result
    }

}