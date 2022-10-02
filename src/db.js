//Creo la conexión con la Base de Datos:
import {createPool} from "mysql2/promise";
import { 
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
 } from "./config.js";
//createPool es similar al createConnection (mantiene un solo hilo de conexión)
export const pool = createPool({
    //Todos los parámetros de la Base De Datos, esto lo brinda el dpto de Tenología:
    host: DB_HOST, //Para el servicio en la nube, poner la IP http://192.168.1.27/
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,

})

/* pool.query(Aquí va la consulta de SQL...) */