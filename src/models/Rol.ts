import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    type: string;
    
    @Column()
    description: string;

    @Column({default: true})
    state: boolean;

    @OneToMany(() => User, (user) => user.id)
    user: User
}