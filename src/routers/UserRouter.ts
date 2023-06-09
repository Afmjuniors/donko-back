import express from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { UserControler } from "../controller/UserController"
import { UserDatabase } from "../database/UsersDatabase"
import { UserDTO } from "../dto/UserDTO"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export const userRouter = express.Router()

// const postsDTO = new PostsDTO()

const userControler = new UserControler(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new TokenManager()
    ),
    new UserDTO()
)



userRouter.get('/', userControler.getUsers )
userRouter.get('/empresas', userControler.getEmpresas )
userRouter.put('/:id', userControler.editUsers )
userRouter.post('/signup', userControler.createUsers )
userRouter.post('/login', userControler.loginUser )
userRouter.delete('/:id', userControler.deleteUsers )



