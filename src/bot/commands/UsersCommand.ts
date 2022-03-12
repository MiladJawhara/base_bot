import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import tr from "../../utilites/i18n";
import { User } from './../../db/models/User';
import BaseCommand from "./BaseCommand";

export default class UsersCommand extends BaseCommand {


    public getCommandText(): string {
        return 'users';
    }

    public async execute(ctx: Context<Update>): Promise<void> {
        ctx.reply(tr.__('Users i know so far') + ':');

        (await User.find()).forEach(user => {
            ctx.reply(user.f_name);
        });
    }

}