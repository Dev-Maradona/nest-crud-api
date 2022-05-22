import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'first_name',
        nullable: false,
    })
    firstName: string;

    @Column({
        name: 'last_name',
        nullable: false
    })
    lastName: string;

    @Column({
        name: 'password',
        type: 'varchar',
        nullable: false
    })
    password: string | number

    @Column({
        default: false,
    })
    isActive: boolean;

    @Column({
        default: false
    })
    isAuthor: boolean;
}