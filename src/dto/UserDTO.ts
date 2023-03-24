import { BadRequestError } from "../error/BadRequestError"

export interface CreateUserDTOInput {
    name: string,
    email: string,
    password: string,
    interests: String[]
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
        if (!Array.isArray(interests)) {
            throw new BadRequestError("'interests deve ser um array'")
        }
        if (!interests.every(ell => typeof ell === "string")) {
            throw new BadRequestError("Os elementos dentro do Array 'interersts' deve ser somente strings")
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