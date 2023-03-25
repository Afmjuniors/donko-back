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
}