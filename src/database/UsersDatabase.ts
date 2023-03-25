import { User } from "../models/User"
import { UserDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USER = "users"


    public getAllUsers = async (): Promise<UserDB[]> => {
        const result = await BaseDatabase
            .connection(UserDatabase.TABLE_USER)
        return result
    }

    public getUserByEmail = async (email:string):Promise<UserDB | undefined> =>{
        const [user] = await BaseDatabase
        .connection(UserDatabase.TABLE_USER)
        .where({email})
        return user
    }
    public createNewUser = async (user:UserDB): Promise<void> => {
                 await BaseDatabase
            .connection(UserDatabase.TABLE_USER)
            .insert(user)
    
    }
    public editUser =async (usertoEdit:any, id:string): Promise<void> => {
        await BaseDatabase
        .connection(UserDatabase.TABLE_USER)
        .update(usertoEdit)
        .where({id})
    }
    public deleteUser =async (id:string): Promise<void> => {
        await BaseDatabase
        .connection(UserDatabase.TABLE_USER)
        .del()
        .where({id})
    }
}