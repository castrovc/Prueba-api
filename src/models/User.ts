import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { Rol } from "./Rol";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default: true})
    state: boolean;

    @ManyToOne(() => Rol, (rol) => rol.user)
    rol: Rol
    
}
