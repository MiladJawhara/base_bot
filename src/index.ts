import { Markup } from "telegraf";
import bot, { register } from './bot';
import { IAction } from './bot/actions/BaseAction';
import SelectLanguageCommand from './bot/commands/SelectLanguageCommand';
import tr from "./utilites/i18n";
import { initConnection } from './utilites/initDbConnection';
import UsersCommand from './bot/commands/UsersCommand';

(async () => {
    const connection = await initConnection;

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
            {
                getCommandText: () => tr.__('say_hello'),
                execute: (ctx) => { ctx.reply(tr.__('hello')) }
            },
            new SelectLanguageCommand(),
            new UsersCommand()
        ],
        actions: [...languageActions]
    });

    // bot.on('document', async (ctx) => {
    //     const { file_id: fileId } = ctx.update.message.document;
    //     const fileUrl = await ctx.telegram.getFileLink(fileId);
    //     const response = await axios.get(fileUrl.toString());
    //     ctx.reply('I read the file for you! The contents were:\n\n' + response.data);
    // });



    // bot.help((ctx) => {
    //     ctx.reply('Send /start to receive a greeting');
    //     ctx.reply('Send /keyboard to receive a message with a keyboard');
    //     ctx.reply('Send /quit to stop the bot');
    // });

    // bot.command('quit', (ctx) => {
    //     // Explicit usage
    //     ctx.telegram.leaveChat(ctx.message.chat.id);
    //     // Context shortcut
    //     ctx.leaveChat();
    // });
    // bot.command('keyboard', (ctx) => {
    //     ctx.reply(
    //         'Keyboard',
    //         Markup.inlineKeyboard([
    //             Markup.button.callback('First option', 'first'),
    //             Markup.button.callback('Second option', 'second'),
    //         ])
    //     );
    // });
    // bot.on('text', (ctx) => {
    //     ctx.reply(
    //         'You choose the ' +
    //         (ctx.message.text === 'first' ? 'First' : 'Second') +
    //         ' Option!'
    //     );
    // });

    bot.launch();
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
})();