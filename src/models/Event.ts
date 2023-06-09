import { nowDate } from "../constants/patterns";
import { GetAllEventOutputDTO } from "../dto/EventDTO";
import { Adress, EventDB, EventFront, Interests, Roles, UserDB } from "../types";




export class Event {
    constructor(
        private id:string,
        private creatorId:string,
        private empresaId:string,
        private isAvalible:boolean,
        private name:string,
        private price:number,
        public adress:Adress,
        private type:string,
        private category:string,
        private linksSales:string[],
        private image:string,
        private about:string,
        private startAt:string,
        private createdAt:string,
    ){} 

    public getId():string{return this.id}

    public getName():string{return this.name}
    public setName(name:string):void{this.name=name}

    public getCreatorId():string{return this.empresaId}

    public getEmpresaId():string{return this.empresaId}

    
    public getIsAvalible():boolean{return this.isAvalible}
    public setIsAvalible(isAvalible:boolean):void{this.isAvalible=isAvalible}

    public getPrice():number{return this.price}
    public setPrice(price:number):void{this.price=price}
    
    public getAdress():{}{return this.adress}
 
        
    public getType():string{return this.type}
    public setType(type:string):void{this.type=type}
   
    public getCategory():string{return this.category}
    public setCategory(category:string):void{this.category=category}
   
    public getLinksSales():string[]{return this.linksSales}
    public setLinksSales(linksSales:string[]):void{
        for(let link of linksSales){
            if(!this.linksSales.includes(link))
            this.linksSales.push(link)
        }   
    }
    public setRemoveLinksSales(linkSales:string):void{
        const index = this.linksSales.indexOf(linkSales)
        this.linksSales.splice(index,1)
    }
    public getAbout():string{return this.about}
    public setAbout(about:string):void{this.about=about}

    public getImage():string{return this.image}
    public setImage(image:string):void{this.image=image}

    public getStartAt():string{return this.startAt}
    public setStartAt(startAt:string):void{this.startAt=startAt}

   
    
    public getCreatedAt():string{return this.createdAt}

    public toDatabase = () : EventDB=>{
         return  {
            id:this.id,
            creator_id:this.creatorId,
            empresa_id:this.empresaId,
            isAvalible:this.isAvalible,
            name:this.name,
            price:this.price,
            adress:JSON.stringify(this.adress),
            type:this.type,
            category:this.category,
            links_sales:JSON.stringify(this.linksSales),
            about:this.about,
            image:this.image,
            start_at  :this.startAt,
            created_at:this.createdAt,
        }  
    }
    
    public toBusiness = (empresaName:string,link:string) : EventFront =>{

        return{
        id:this.id,
        creatorId:this.creatorId,
        empresa:{
            id:this.empresaId,
            name:empresaName,
            link:link
        },
        isAvalible:this.isAvalible,
        name:this.name,
        price:this.price,
        adress:{
           rua:this.adress.rua,
           numero:this.adress.numero,
           bairro:this.adress.bairro,
           cep:this.adress.cep
        },
        type:this.type,
        category:this.category,
        linksSales:this.linksSales,
        image:this.image,
        about:this.about,
        startAt:this.startAt,
        createdAt:this.createdAt
    }

    }


    

    

}