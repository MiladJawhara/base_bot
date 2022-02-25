import dotenv from "dotenv";
import { Markup, Telegraf } from "telegraf";
import fs from "fs";
import axios from "axios";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);


bot.start((ctx) => {
    const user = ctx.from;

    const userName = user.first_name + ' ' + user.last_name;
    ctx.reply(`Hello ${userName} !`);
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