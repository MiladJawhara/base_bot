import { Context, Markup } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import tr from "../../utilites/i18n";
import BaseCommand from "./BaseCommand";

export default class SelectLanguageCommand extends BaseCommand {


    public getCommandText(): string {
        return 'select_language';
    }

    public execute(ctx: Context<Update>): void {
        const locales = tr.getLocales();

        const keyboard = Markup.inlineKeyboard(
            locales.map(local => Markup.button.callback(tr.__(local), local))
        );

        ctx.reply(tr.__('Select a language'), keyboard)
    }

}