
import 'reflect-metadata';
import { Connection, createConnection } from "typeorm";
import {connectionConfigs} from '../config';

export const initConnection: Promise<Connection> = createConnection(connectionConfigs);
