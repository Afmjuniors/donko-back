import { EventsDatabase } from "../database/EventsDatabase"
import { TokenManager, TokenPayload } from "../services/TokenManager"

export class EventsBusiness {
    constructor(
        private eventsDatabase: EventsDatabase,
        private tokenManager: TokenManager
    ) { }

    public getEvents = async () => {
        return await this.eventsDatabase.getAllEvents()
    }
   

}