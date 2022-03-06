import { Markup } from "telegraf";
import bot, { register } from './bot';
import { IAction } from './bot/actions/BaseAction';
import SelectLanguageCommand from './bot/commands/SelectLanguageCommand';
import tr from "./utilites/i18n";

const locales = tr.getLocales();

const languageActions: IAction[] = [];

locales.forEach(local => {
    languageActions.push({
        getActionText: () => local,
        execute: (ctx) => {
            tr.setLocale(local);
            ctx.reply(tr.__('Bot language is now:') + ` ${tr.__(local)}`, Markup.removeKeyboard());
        }
    })
});

register({
    commands: [
        new SelectLanguageCommand()
    ],
    actions: [...languageActions]
});

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))