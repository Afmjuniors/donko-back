import { nowDate } from "../constants/patterns";
import { Roles, UserDB } from "../types";




export class User {
    constructor(
        private id:string,
        private name:string,
        private email:string,
        private password:string,
        private role:Roles,
        private interests:String[],
        private createdAt:string,
    ){} 

    public getId():string{return this.id}

    public getName():string{return this.name}
    public setName(name:string):void{this.name=name}

    public getEmail():string{return this.email}
    public setEmail(email:string):void{this.email=email}
    
    public getpassword():string{return this.password}
    public setpassword(password:string):void{this.password=password}
    
    public getRole():Roles{return this.role}
    public setRole(role:Roles):void{this.role=role}
    
    public getInterests():String[]{return this.interests}
    public setInterests(interests:String[]):void{
        for(let interest of interests){
            this.interests.push(interest)
        }
    }  
    
    public getcreatedAt():string{return this.createdAt}

    public toDatabase = () : UserDB=>{
         return  {
            id:this.id,
            name:this.name,
            email:this.email,
            password:this.password,
            role:this.role,
            interests:JSON.stringify(this.interests),
            created_at:this.createdAt
        }  
    }
    

    

}