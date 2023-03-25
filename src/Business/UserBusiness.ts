import { nowDate } from "../constants/patterns"
import { UserDatabase } from "../database/UsersDatabase"
import { CreateUserDTOInput, CreateUserDTOOutput, LoginUserInputDTO, LoginUserOutputDTO } from "../dto/UserDTO"
import { NotFoundError } from "../error/NotFoundError"
import { PasswordIncorrectError } from "../error/PasswordIncorrectError"
import { User } from "../models/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager, TokenPayload } from "../services/TokenManager"
import { Interests, Roles, UserDB } from "../types"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private tokenManager: TokenManager
    ) { }

    public getUsers = async () => {
        return await this.userDatabase.getAllUsers()
    }
    public loginUser= async ({email,password}:LoginUserInputDTO):Promise<LoginUserOutputDTO> =>{

        const user = await this.userDatabase.getUserByEmail(email)
        if(user===undefined){
            throw new NotFoundError("Usuario não encontrado")
        }

        const isPassword =  await this.hashManager.compare(password,user.password)
        
        if(!isPassword){
            throw new PasswordIncorrectError("Email ou Password invalidos")
        }
        const payload:TokenPayload={
            id:user.id,
            name:User.name,
            role:user.role
        }

        const token = this.tokenManager.createToken(payload)
        return {
            message: "Login feito com sucesso",
            token
        }

    }
    public createNewUser = async (input: CreateUserDTOInput): Promise<CreateUserDTOOutput> => {

        const id = this.idGenerator.generate()
        const passwordHashed = await this.hashManager.hash(input.password)
        const user = new User(
            id,
            input.name,
            input.email,
            passwordHashed,
            Roles.NORMAL,
            input.interests as Interests,
            nowDate

        )
        const payload: TokenPayload = {
            id: user.getId(),
            name: user.getName(),
            role: user.getRole()

        }
        const token = this.tokenManager.createToken(payload)
        await this.userDatabase.createNewUser(user.toDatabase())
        return {
            message: "Usuario criado com sucesso",
            token
        }

    }

    public editUser = async (input: any) => {
        const { email, password, interests, id } = input

        await this.userDatabase.editUser({ email, password, interests }, id)

        return {
            message: "usuario editado com sucesso"
        }
    }

    public deleteUser = async (id: string) => {


        await this.userDatabase.deleteUser(id)

        return {
            message: "usuario deletado com sucesso"
        }
    }


}