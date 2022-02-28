import dotenv from 'dotenv';
dotenv.config();

export default (key: string) => {
    return process.env[key]
}