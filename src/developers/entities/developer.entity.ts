import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid")

@Entity('developers')
export class Developer {
    @PrimaryColumn()
    id: String; // dev_0809yc8av
    
    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    dateOfBirth: String;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`
    }
}
