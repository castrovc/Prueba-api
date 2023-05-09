import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Rol } from "../models/Rol";

const rolRepository = AppDataSource.getRepository(Rol);

class RolController {
    static createRol = async (req: Request, res: Response) => {
      //  const rolRepository = AppDataSource.getRepository(Rol);
        const { type, description } = req.body;

        try {
            const rol = new Rol();
            rol.type = type;
            rol.description = description;

            await rolRepository.save(rol);
            return res.json({
                ok: true,
                msg: "rol was save",
            });
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error -> ${error}`,
            });
        }
    };

    static getRoles = async (req: Request, res: Response) => {
        try {
            const roles = await rolRepository.find();

            return roles.length > 0
                ? res.json({ ok: true, roles })
                : res.json({ ok: false, msg: "rol not found" });
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error -> ${error}`,
            });
        }
    };

    static getRol = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            const rol = await rolRepository.findOne({
                where: { id },
            });

            return rol
                ? res.json({ ok: true, rol })
                : res.json({ ok: false, msg: "rol not found" });
        } catch (error) {
            return res.json({
                ok: false,
                msg: `Error -> ${error}`,
            });
        }
    };

    //UPDATE
    static updateRol = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        const {type, description } = req.body;
        const repoRol = AppDataSource.getRepository(Rol);
        let rol: Rol;

        try {
            rol = await repoRol.findOneOrFail({
                where: {id, state: true},
            });
            if (!rol){
                throw new Error("Rol dont exist in data base");
            }
            rol.type= type,
            rol.description= description,

            await repoRol.save(rol);
            return res.json({
                ok:true,
                msg: "Rol was update"
            });
        } catch (error) {
            return res.json({
                ok: false,
                msg: "Server error",
            });
        }
    }
    //delete
    static deleteRol =async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const repoRol = AppDataSource.getRepository(Rol);
        try {
            const rol = await repoRol.findOne({
                where:{id},
            });

            console.log(rol)
            if (!rol){
                throw new Error("Rol dont exist in data base");
            }
            rol.state = false;
            await repoRol.save(rol);
            return res.json({
                ok: true,
                msg: "Rol was delete",
            })
        } catch (e) {
            return res.json({
                ok: false,
                msg: "Server error"
            })
        }
        
    }
}

export default RolController;
