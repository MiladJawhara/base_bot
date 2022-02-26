import { Context, Telegraf } from "telegraf";


export interface ICommand {
    text: string,
    execute: (ctx: Context) => void
}

export type command = ICommand | BaseCommand;

export default abstract class BaseCommand {

    private static bot: Telegraf;

    protected abstract getCommandText(): string;

    protected abstract execute(ctx: Context): void;

    public registerCommand(bot: Telegraf) {
        bot.command(this.getCommandText(), this.execute)
    }
}

export const registerCommands = (bot: Telegraf, commands: command[]) => {
    commands.forEach(command => {

        if (command instanceof BaseCommand) {
            command.registerCommand(bot);
            return;
        }

        bot.command(command.text, command.execute);
    })
}