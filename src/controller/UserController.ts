import { Request, Response } from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { UserDTO } from "../dto/UserDTO"
import { BaseError } from "../error/BaseError"

export class UserControler{
    constructor(
private userBusiness: UserBusiness,
private userDTO : UserDTO
    ){}

    public getUsers = async (req:Request,res:Response) =>{
        try {

            const output = await this.userBusiness.getUsers()


        res.status(200).send(output)
            
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public editUsers = async (req:Request,res:Response) =>{
        try {
            const input ={
                email:req.body.email,
                passowrd:req.body.passowrd,
                interests:req.body.interests,
                id:req.params.id
            }
            const output = await this.userBusiness.editUser(input)
        res.status(200).send(output)
            
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public createUsers = async (req:Request,res:Response) =>{
        try {
            const input = this.userDTO.CreateUserDTOInput(
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.interests
            )
                const output = await this.userBusiness.createNewUser(input)

        res.status(201).send(output)
            
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public loginUser = async (req:Request,res:Response) =>{
        try {
            const input = this.userDTO.LoginUserInputDTO(
                req.body.email,
                req.body.password
            )
                const output = await this.userBusiness.loginUser(input)

        res.status(201).send(output)
            
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public deleteUsers = async (req:Request,res:Response) =>{
        try {
            const input = req.params.id
            const output = await this.userBusiness.deleteUser(input)

        res.status(200).send(output)
            
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}