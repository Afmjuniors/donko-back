export enum Roles{
    ADMIN="ADMIN",
    NORMAL="NORMAL",
    EMPRESA="EMPRESA",
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