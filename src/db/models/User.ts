import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    chat_id: string

    @Column({ default: 0 })
    msg_count: number
}