import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    chat_id: number

    @Column()
    f_name: string

    @Column({ nullable: true })
    l_name?: string

    @Column({ default: 0 })
    msg_count: number


    public static async createIfNotExist(chatId: number, fName: string, lName?: string) {

        if (await User.exist(chatId)) return;

        const newUser = new User();

        newUser.chat_id = chatId;
        newUser.f_name = fName;
        newUser.l_name = lName;

        await newUser.save();
    }

    public static async exist(chatId: number): Promise<boolean> {
        return Boolean(await User.findOne(chatId));
    }
}