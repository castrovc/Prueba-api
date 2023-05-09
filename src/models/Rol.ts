import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}