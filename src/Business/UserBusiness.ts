import { nowDate } from "../constants/patterns"
import { UserDatabase } from "../database/UsersDatabase"
import { CreateUserDTOInput, CreateUserDTOOutput } from "../dto/UserDTO"
import { User } from "../models/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager, TokenPayload } from "../services/TokenManager"
import { Roles, UserDB } from "../types"

export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private tokenManager: TokenManager
    ){}

    public getUsers =async () => {
        return await this.userDatabase.getAllUsers()
    }
    public createNewUser = async (input:CreateUserDTOInput):Promise<CreateUserDTOOutput> =>{


        const id = this.idGenerator.generate()
        const passwordHashed = await this.hashManager.hash(input.password) 
        const user = new User(
            id,
            input.name,
            input.email,
            passwordHashed,
            Roles.NORMAL,
            input.interests,
            nowDate

        )
        const payload: TokenPayload ={
            id: user.getId(),
            name:user.getName(),
            role:user.getRole()
            
        }
        const token = this.tokenManager.createToken(payload)
        await this.userDatabase.createNewUser(user.toDatabase())
        return {
            message:"Usuario criado com sucesso",
            token
        }

    }

    public editUser =async (input:any) => {
        const { email, password, interests,id} = input

         await this.userDatabase.editUser({email,password,interests}, id)

         return {
            message:"usuario editado com sucesso"
         }
        }

        public deleteUser =async (id:string) => {
           
    
             await this.userDatabase.deleteUser( id)
    
             return {
                message:"usuario deletado com sucesso"
             }
            }

   
}