import { Telegraf } from "telegraf";
import env from "../utilites/env";
import { User } from './../db/models/User';
import tr from './../utilites/i18n';
import { IAction } from "./actions/BaseAction";
import { ICommand } from "./commands/BaseCommand";

const bot = new Telegraf(env('BOT_TOKEN') as string);


export interface IBotInteraction {
    commands?: ICommand[],
    actions?: IAction[]
}


const regesterCommands = (commands: ICommand[]) => {
    commands.forEach(command => {
        bot.command(command.getCommandText(), command.execute);
    })
}

const regesterActions = (actions: IAction[]) => {
    actions.forEach(action => {
        bot.action(action.getActionText(), action.execute);
    })
}

export const register = (actions: IBotInteraction) => {
    actions.commands ? regesterCommands(actions.commands) : null;

    actions.actions ? regesterActions(actions.actions) : null;
}

bot.start(async (ctx) => {
    const user = ctx.from;
    const userName = user.first_name + ' ' + user.last_name;

    await User.createIfNotExist(ctx.chat.id, user.first_name, user.last_name);
    ctx.reply(tr.__(`hello`) + ' ' + userName);
});


export default bot;
