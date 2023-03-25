import { nowDate } from "../constants/patterns"
import { UserDatabase } from "../database/UsersDatabase"
import { CreateUserDTOInput, CreateUserDTOOutput } from "../dto/UserDTO"
import { User } from "../models/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager, TokenPayload } from "../services/TokenManager"
import { Interests, Roles, UserDB } from "../types"

export class EventsBusiness {
    constructor(
        private eventsDatabase: EventsDatabase,
        private tokenManager: TokenManager
    ) { }

    public getEvents = async () => {
        return await this.eventsDatabase.getAllEvents()
    }
   

}