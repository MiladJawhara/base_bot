import { Context } from "telegraf";
import BaseInteraction from "../BaseInteraction";

export interface ICommand {
    getCommandText: () => string,
    execute: (ctx: Context) => void
}

export default abstract class BaseCommand extends BaseInteraction implements ICommand {

    public abstract getCommandText(): string;

    public abstract execute(ctx: Context): void;

    public registerCommand() {
        this.bot.command(this.getCommandText(), this.execute)
    }
}

