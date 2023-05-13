import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../models/User";
import { Rol } from "../models/Rol";

import bcrypt from 'bcryptjs';

const {tokenSing} = require('../models/generateToken')

const userRepository = AppDataSource.getRepository(User);

// -->ENCRIPTAR PASSWORD<--
const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

class UserController {

    static createUser = async (req: Request, res: Response) => {
        const { name, rolId, age, email, password } = req.body;
        try {
            const user = new User();
            user.name = name;
            user.rol = rolId;
            user.age = age;
            user.email = email;
            user.password = password;

            user.password= await encryptPassword(user.password);
            await userRepository.save(user);

            //token
            // const token : string = jwt.sign({ id:user.id }, process.env.TOKEN_SECRET || 'tokentest')
                
            
            return res.json({
                ok: true,
                msg: "user was save",
            });
        } 
            catch (error) {
            return res.json({
                ok: false,
                msg: `Error -> ${error}`,
            });
        }
    };

    static getUsers = async (req: Request, res: Response) => {
        try {
            const users = await userRepository.find({
                relations:{
                    rol:true
                },
                where: {state:true}
            });

            return users.length > 0
                ? res.json({ ok: true, users })
                : res.json({ ok: false, msg: "user not found" });
        } catch (error) {
            return res.json({
                ok: false,
                // msg:(token),
                msg: `Error => ${error}`,
            });
        }
    };

    static getUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            const user = await userRepository.findOne({
                where: { id },
            });

            return user
                ? res.json({ ok: true, user })
                : res.json({ ok: false, msg: "user not found" });
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error => ${error}`,
            });
        }
    };

    //update
    static updateUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        const { name, age, email, password } = req.body;
        const repoUser = AppDataSource.getRepository(User);
        let user: User;

        try {
            user = await repoUser.findOneOrFail({
                where: { id, state: true },
            });
            if (!user) {
                throw new Error("User dont exist in data base");
            }
            (user.name = name),
                (user.age = age),
                (user.email = email),
                (user.password = password);

            await repoUser.save(user);
            return res.json({
                ok: true,
                msg: "User was update",
            });
        } catch (error) {
            return res.json({
                ok: false,
                msg: "Server error",
            });
        }
    };
    
    //delete
    static deleteUser = async (req: Request, res: Response) => {
        
        const id = parseInt(req.params.id);
        const repoUser = AppDataSource.getRepository(User);
        try {
            const user = await repoUser.findOne({
                where: { id },
            });

            console.log(user);
            if (!user) {
                throw new Error("User dont exist in data base");
            }
            user.state = false;
            await repoUser.save(user);
            return res.json({
                ok: true,
                msg: "User was delete",
            });
        } catch (e) {
            return res.json({
                ok: false,
                msg: "Server error",
            });
        }
    };

    // ->LOGGIN<-
    static loggin =async (req: Request, res: Response) => {

        const {email, password} = req.body;

        const user = await userRepository.findOne({where: {email}});
        if (!user) return res.status(400).json("incorrect credentials");

        const passwordCorrect = bcrypt.compareSync(password, user.password)
        if (!passwordCorrect) {
            return res.status(401).json({msg:'incorrect credential'});
        }
        
        const sessionToken = await tokenSing(user)
        if(passwordCorrect){
            data: user
            sessionToken
        }

        return res.json({
            ok: true,
            sessionToken,
            msg: 'session started'
        })
}


}

export default UserController;