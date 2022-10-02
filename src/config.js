import {config} from 'dotenv';

config();  // Con estas dos líneas de código, ya estoy leyend Variables de Entorno.

export const PORT = process.env.PORT || 3000;

export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '2531';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'banksys'; 
export const DB_PORT = process.env.DB_PORT || 3306;

