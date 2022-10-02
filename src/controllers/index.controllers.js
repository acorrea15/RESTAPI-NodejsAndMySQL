import {pool} from '../db.js' //Pongo .js porque es mi propio módulo

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM tgl_movimientos ORDER BY fecreal');
    res.json(result);
}