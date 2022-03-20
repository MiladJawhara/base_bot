import { Context } from "telegraf";
import BaseInteraction from "../BaseInteraction";


export interface ISubCommand {
    text: string,
    execute: (ctx: Context) => void
}
export interface IUserCommand {
    getCommandText: () => string,
    execute: (ctx: Context) => void
}

export default abstract class BaseUserCommand extends BaseInteraction implements IUserCommand {

    public abstract getCommandText(): string;

    public abstract execute(ctx: Context): void;

    public registerCommand() {
        this.bot.command(this.getCommandText(), this.execute)
    }

    protected abstract subCommands(): ISubCommand[]
}


export const commandFactory = (commandText: string) => {

    switch (commandText) {

    }
}

