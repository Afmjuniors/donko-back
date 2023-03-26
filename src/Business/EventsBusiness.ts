import { nowDate } from "../constants/patterns"
import { EventsDatabase } from "../database/EventsDatabase"
import { CreateEventInputDTO, CreateEventOutputDTO, EditEventInputDTO, EditEventOutputDTO, GetAllEventOutputDTO } from "../dto/EventDTO"
import { BadRequestError } from "../error/BadRequestError"
import { DeniedAuthoError } from "../error/DeniedAuthoError"
import { NotFoundError } from "../error/NotFoundError"
import { Event } from "../models/Event"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { Adress, EditEventDB, Roles } from "../types"

export class EventsBusiness {
    constructor(
        private eventsDatabase: EventsDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager
    ) { }

    public getEvents = async (input?:string) :Promise<GetAllEventOutputDTO> => {

        let result
        if(input){
 
            const event = await this.eventsDatabase.getEventById(input)
            const empresas = await this.eventsDatabase.getEmpresas()
            const empresa = empresas.find((empresa)=>empresa.id===event.empresa_id)
            if(empresa===undefined){
                throw new NotFoundError("empresa nao encontrada")
            }
            const newResult =  new Event(
                    event.id,
                    event.creator_id,
                    event.empresa_id,
                    event.isAvalible?true:false,
                    event.name,
                    event.price,
                    JSON.parse(event.adress),
                    event.type,
                    event.category,
                    JSON.parse(event.links_sales),
                    event.image,
                    event.start_at,
                    event.created_at
                ).toBusiness(empresa.name)
            
        result = [newResult]
    
   
        }else{


        
        const events = await this.eventsDatabase.getAllEvents()
        const empresas = await this.eventsDatabase.getEmpresas()
        const newResult = events.map((event)=>{
            const empresa = empresas.find((empresa)=>empresa.id===event.empresa_id)
            if(empresa===undefined){
                throw new NotFoundError("empresa nao encontrada")
            }
            return new Event(
                event.id,
                event.creator_id,
                event.empresa_id,
                event.isAvalible?true:false,
                event.name,
                event.price,
                JSON.parse(event.adress),
                event.type,
                event.category,
                JSON.parse(event.links_sales),
                event.image,
                event.start_at,
                event.created_at
            ).toBusiness(empresa.name)
        })

        result = newResult
    }
   

        const output = {
            message:"Resultado de todos os eventos",
            events: result
        }
        return output
    }
    public createEvent =async (input:CreateEventInputDTO):Promise<CreateEventOutputDTO> => {
        const{token} = input
        const payload = this.tokenManager.getPyaload(token)
        if(payload === null){
            throw new BadRequestError("Token invalido")
        }
        if(payload.role!==Roles.PRODUTOR){
            throw new DeniedAuthoError("Apenas um produtor pode criar um evento")
        }

        const newId = this.idGenerator.generate()
        const newEvent = new Event(
            newId,
            payload.id,
            input.empresaId,
            input.isAvalible,
            input.name,
            input.price,
            input.adress as Adress,
            input.type,
            input.category,
            input.linksSales,
            input.image,
            input.startAt,
            nowDate
        )

        await this.eventsDatabase.createEvent(newEvent.toDatabase())
        return{
            message:"Evento cadastrado com sucesso"
        }
    }

    public editEvent =async (input:EditEventInputDTO):Promise<EditEventOutputDTO> => {
        const {id,isAvalible, price,startAt, token} = input

        const eventToEdit = await this.eventsDatabase.getEventById(id)
        if(eventToEdit===undefined){
            throw new NotFoundError("Evento não encontrado")
        }

        const payload = this.tokenManager.getPyaload(token)
        if(payload === null){
            throw new BadRequestError("Token invalido")
        }
        if(payload.id!==eventToEdit.creator_id){
            throw new DeniedAuthoError("Apenas um produtor pode criar um evento")
        }

        const toEdit: EditEventDB = {
            isAvalible,
            price,
            start_at:startAt
        }

        await this.eventsDatabase.editEvent(toEdit,id)
        return{
            message:"Evento editado com sucesso"
        }
    }
    public deleteEvent =async (input:any):Promise<EditEventOutputDTO> => {
        const {id, token} = input

        const eventToDelete = await this.eventsDatabase.getEventById(id)
        if(eventToDelete===undefined){
            throw new NotFoundError("Evento não encontrado")
        }

        const payload = this.tokenManager.getPyaload(token)
        if(payload === null){
            throw new BadRequestError("Token invalido")
        }
        if(payload.id!==eventToDelete.creator_id){
            throw new DeniedAuthoError("Apenas um produtor pode criar um evento")
        }


        await this.eventsDatabase.deleteEvent(id)
        return{
            message:"Evento deletado com sucesso"
        }
    }
   

}