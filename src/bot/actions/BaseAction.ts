import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import BaseInteraction from "../BaseInteraction";


export interface IAction {
    getActionText: () => string,
    execute: (ctx: Context) => void
}

export default abstract class BaseAction extends BaseInteraction implements IAction {

    abstract getActionText: () => string;
    abstract execute: (ctx: Context<Update>) => void;

}