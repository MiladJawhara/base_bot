import { Context, Markup } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import i18n from "../../utilites/i18n";
import BaseCommand from "./BaseCommand";

export default class SelectLanguageCommand extends BaseCommand {


    protected getCommandText(): string {
        return 'select_language';
    }

    protected execute(ctx: Context<Update>): void {
        const locales = i18n.getLocales();

        const keyboard = Markup.inlineKeyboard(
            locales.map(local => Markup.button.callback(i18n.__(local), local))
        );

        ctx.reply(i18n.__('Select a language'), keyboard)
    }

}