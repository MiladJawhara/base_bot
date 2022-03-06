import { Telegraf } from 'telegraf';
import bot from './index';


export default abstract class BaseInteraction {
    protected bot: Telegraf;
    constructor() {
        this.bot = bot;
    }
}