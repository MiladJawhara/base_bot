import dotenv from 'dotenv';
dotenv.config();

export default (key: string, val: string = ''): string => {
    if (!process.env[key]) return val;
    return process.env[key] as string;
}