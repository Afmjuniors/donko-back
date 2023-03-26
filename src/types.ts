export enum Roles{
    ADMIN="ADMIN",
    NORMAL="NORMAL",
    PRODUTOR="PRODUTOR",
}
export interface UserDB{
    id:string,
    name:string,
    email:string,
    password:string,
    role:Roles,
    interests:string,
    created_at:string
}
export interface Interests{
    types:string[],
    categories:String[]
}

export interface EventDB{
    id:string,
    creator_id:string,
    empresa_id:string,
    isAvalible:boolean,
    name:string,
    price:number,
    adress:string,
    type:string,
    category:string,
    links_sales:string,
    image:string,
    start_at:string,
    created_at:string,
}
export interface EditEventDB{
    isAvalible?:boolean,
    price?:number,
    start_at?:string
}
export interface EventFront {
     id:string,
     creatorId:string,
     empresaId:string,
     isAvalible:boolean,
     name:string,
     price:number,
     adress:Adress,
     type:string,
     category:string,
     linksSales:string[],
     image:string,
     startAt:string,
     createdAt:string,
}

export interface Adress {
    
        rua:string,
        numero:number,
        bairro:string,
        cep:number
     
}