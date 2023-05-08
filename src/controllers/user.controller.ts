import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../models/User"

const userRepository = AppDataSource.getRepository(User);

class UserController {
    static createUser = async (req: Request, res: Response) => {
        const {name, age} = req.body
        try {
            const user = new User();
            user.name = name;
            user.age = age;

            await userRepository.save(user);
            return res.json({
                ok: true,
                msg: "user was save",
            })
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error -> ${error}`,
            })
            
        }
    };

    static getUsers = async (req: Request, res: Response) => {
        try {
            const users = await userRepository.find();

            return users.length>0 ? res.json({ok: true, users}):
            res.json({ok:false, msg:"user not found"});
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error => ${error}`
            })
            
        }
    }

    static getUser =async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            const user = await userRepository.findOne({
                where:{id},
            });

            return user ? res.json({ok: true, user}):
            res.json({ok:false, msg: "user not found"});
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error => ${error}`
            })
        }
    }

    //update
    static updateUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        const {name, age} = req.body;
        const repoUser = AppDataSource.getRepository(User);
        let user: User;

        try {
            user = await repoUser.findOneOrFail({
                where: {id, state: true},
            });
            if (!user){
                throw new Error("User dont exist in data base");
            }
            user.name= name,
            user.age= age

            await repoUser.save(user);
            return res.json({
                ok:true,
                msg: "User was update"
            });
        } catch (error) {
            return res.json({
                ok: false,
                msg: "Server error",
            });
        }
    }
    //delete
    static deleteUser =async (res: Response, req: Request) => {
        const id = parseInt(req.params.id);
        const repoUser = AppDataSource.getRepository(User);
        try {
            const user = await repoUser.findOne({
                where:{id},
            });

            console.log(user)
            if (!user){
                throw new Error("User dont exist in data base");
            }
            user.state = false;
            await repoUser.save(user);
            return res.json({
                ok: true,
                msg: "User was delete",
            })
        } catch (e) {
            return res.json({
                ok: false,
                msg: "Server error"
            })
        }
        
    }
}

export default UserController;

