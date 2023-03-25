import { BadRequestError } from "../error/BadRequestError"
import { Interests } from "../types"

export interface CreateUserDTOInput {
    name: string,
    email: string,
    password: string,
    interests: { }
}
export interface CreateUserDTOOutput {
    message: string,
    token:string
}
export interface LoginUserInputDTO {
    email: string,
    password: string,
}
export interface LoginUserOutputDTO {
    message: string,
    token:string
}
export interface EditUserInputDTO{
    token:string,
    id:string,
    email?:string,
    password?:string

}
export interface EditUserOutputDTO {
    message: string
}
export interface DeleteUserInputDTO{
    id:string,
    token:string
}
export interface DeleteUserOutputDTO {
    message: string
}


export class UserDTO {
    public CreateUserDTOInput = (
        name: unknown,
        email: unknown,
        password: unknown,
        interests: unknown
    ): CreateUserDTOInput => {

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser uma string")
        }

        if (typeof email !== "string") {
            throw new BadRequestError("'email' deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new BadRequestError("'password' deve ser uma string")
        }
        if (!(interests && typeof interests === "object" && "types" in interests && "categories" in interests &&
        Array.isArray(interests.types) && Array.isArray(interests.categories))) {
        throw new BadRequestError("'interests' deve ser um objeto com os campos 'types' e 'category', ambos sendo arrays de strings")
    }


        const dto = {
            name,
            email,
            password,
            interests
        }


        return dto
    }

    public LoginUserInputDTO = (
        email:unknown,
        password:unknown
    ):LoginUserInputDTO =>{
        if (typeof email !== "string") {
            throw new BadRequestError("'email' deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new BadRequestError("'password' deve ser uma string")
        }
        const dto ={
            email,
            password
        }
        return dto
    }
    public EditUserInputDTO = (
        token:unknown,
        id:unknown,
        email:unknown,
        password:unknown       
        
    ):EditUserInputDTO=>{
        if(typeof token !=="string"){
            throw new BadRequestError("'token' deve ser uma string")
        }
        if(typeof id !=="string"){
            throw new BadRequestError("'id' deve ser uma string")
        }
        if(email!==undefined){
            if(typeof email !=="string"){
                throw new BadRequestError("'email' deve ser uma string")
            }
        }
        if(password!==undefined){
            if(typeof password !=="string"){
                throw new BadRequestError("'password' deve ser uma string")
            }
        }
        const dto={
            token,
            id,
            email,
            password
        }
        return dto

    }
    public DeleteUserInputDTO = (
        token:unknown,
        id:unknown
    ):DeleteUserInputDTO=>{
        if(typeof token !=="string"){
            throw new BadRequestError("'token' deve ser uma string")
        }
        if(typeof id !=="string"){
            throw new BadRequestError("'id' deve ser uma string")
        }
        const dto ={
            token,
            id
        }
        return dto
    }


}