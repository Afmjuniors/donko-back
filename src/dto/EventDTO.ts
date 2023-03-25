import { BadRequestError } from "../error/BadRequestError"
import { Interests } from "../types"

export interface CreateEventInputDTO {
    token:string,
    empresaId: string,
    isAvalible: boolean,
    name: string,
    price: number,
    adress: {},
    type: string,
    category: string,
    linksSales:string[],
    image:string,
    startAt: string
}
export interface CreateEventOutputDTO {
    message: string
}
export interface EditEventInputDTO {
    token:string,
    id: string
    isAvalible?: boolean,
    price?:number,
    startAt?: string
}
export interface EditEventOutputDTO {
    message: string
}
export interface DeleteEventInputDTO{
    token:string,
    id:string
}
export interface DeleteEventOutputDTO{
    message:string
}



export class EventDTO {
    public CreateEventInputDTO = (
        token:unknown,
        empresaId: unknown,
        isAvalible: unknown,
        name: unknown,
        price: unknown,
        adress: unknown,
        type: unknown,
        category: unknown,
        linksSales:unknown,
        image:unknown,
        startAt: unknown
    ): CreateEventInputDTO => {

        if (typeof token !== "string") {
            throw new BadRequestError("'token' deve ser uma string")
        }

        if (typeof empresaId !== "string") {
            throw new BadRequestError("'empresaId' deve ser uma string")
        }
        if (typeof isAvalible !== "boolean") {
            throw new BadRequestError("'isAvalible' deve ser uma boolean")
        }
        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser uma string")
        }
        if (typeof price !== "number") {
            throw new BadRequestError("'price' deve ser uma number")
        }
        if (typeof type !== "string") {
            throw new BadRequestError("'type' deve ser uma string")
        }
        if (typeof startAt !== "string") {
            throw new BadRequestError("'startAt' deve ser uma string")
        }
        if (typeof category !== "string") {
            throw new BadRequestError("'category' deve ser uma string")
        }
        if (!Array.isArray(linksSales) || linksSales.some(s => typeof s !== 'string')) {
            throw new BadRequestError("'linkSales' deve ser uma Array de strings");
        }
        if (typeof image !== "string") {
            throw new BadRequestError("'image' deve ser uma string")
        }
        if (typeof adress !== "object" || adress === null) {
            throw new BadRequestError("'adress' deve ser uma object")
        }



        const dto : CreateEventInputDTO= {
            token,
            empresaId,
            isAvalible,
            name,
            price,
            adress,
            type,
            category,
            linksSales,
            image,
            startAt
        }


        return dto
    }

    public EditEventInputDTO = (
        token:unknown,
        id: unknown,
        isAvalible: unknown,
        price:unknown,
        startAt: unknown
    ): EditEventInputDTO => {
        if (typeof token !== "string") {
            throw new BadRequestError("'token' deve ser uma string")
        }
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser uma string")
        }

        if (isAvalible !== undefined) {
            if (typeof isAvalible !== "boolean") {
                throw new BadRequestError("'isAvalible' deve ser um boolean")
            }
        }
        if (startAt !== undefined) {
            if (typeof startAt !== "string") {
                throw new BadRequestError("'startAt' deve ser um string")
            }
        }
        if (price !== undefined) {
            if (typeof price !== "number") {
                throw new BadRequestError("'price' deve ser um number")
            }
        }
        const dto = {
            token,
            id,
            isAvalible,
            price,
            startAt
        }
        return dto
    }
    public DeleteEventInputDTO = (
        token:unknown,
        id:unknown
    ):DeleteEventInputDTO=>{
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