import {pool} from '../db.js'

//export const getMovimientos = (req, res) => res.send("Obteniendo los movimientos solicitados por ICF24 para el refresh de IBK.");
export const getMovimientos = async (req, res) => { 
    try {
        /* throw new Error('DB ERROR!!') */
        const [rows] = await pool.query('SELECT * FROM tgl_movimientos  ORDER BY fecreal')
        res.json(rows);  
    } catch (error) {
        return res.status(500).json({
            message: 'Error. Reporte a Censys SA!'
        })
    }
};

/* export const getMovimiento = async (req, res) => { 
    const {id} = req.params;
    const [rows] = await pool.query('SELECT * FROM tgl_movimientos WHERE id='+id+ ' ORDER BY fecreal')
    res.json(rows);  
    console.log(id);
    console.log(req.params.id)    
}; */

export const getMovimiento = async (req, res) => { 
   try {
        const [rows] = await pool.query('SELECT * FROM tgl_movimientos WHERE id=? ORDER BY fecreal', [req.params.id]);
        
        if(rows.length <= 0){
            return res.status(404).json({"message": "No se encontró el movimiento solicitado"})
        }
        res.json(rows[0]); //Los id deberían ser únicos  
   } catch (error) {
        return res.status(500).json({
            message: 'Error. Reporte a Censys SA!'
        })
   }
};

//Toda operación con la base de dato es una consulta asíncrona
export const createSolicitud = async (req, res) => {
    /* res.send("Creando solicitudes de nuevos movimientos a confirmar.") */
    
    /* console.log(req.body) */ //En body tengo los datos que el cliente me envía al hacer la petición
    const {cantMov, confirmada} = req.body;
    
    try {
        if (cantMov <= 0 || cantMov > 999){
            res.status(500).json({error: 'There was an error.'});
        }
    
        //Solo quiero las filas insertadas del objeto grande que devuelve el pool.query()
        const [rows] = await  pool.query('INSERT INTO tgl_solic_movim(cantMov, confirmada) VALUES (?, ?)', [cantMov, confirmada])
        /* res.send({rows}); */ //Coloco entre llaves para que pueda devolverlo como un objeto json
        res.send({
                 id: rows.insertId,
                 cantMov, 
                 confirmada});
    } catch (error) {
        return res.status(500).json({
            message: 'Error. Reporte a Censys SA!'
        })
    }
    
};

export const updateSolicitud = async (req, res) => {
    /* res.send("Confirmando movimientos de IBS ya enviados.") */
  
   /* Estas dos formas de obtener el valor del id del parámtreo son válidas:
      const id = req.params.id;
      const {id} = req.params; */

    const {confirmada} = req.body;
    
    try {
        const [result] = await pool.query('UPDATE tgl_solic_movim SET confirmada = IfNull(?, confirmada) WHERE id = ?', [confirmada, req.params.id]);

        if (result.affectedRows === 0){
            return res.status(404).json({message: 'Solicitud no encontrada. No se actualizó nada!'})
        }

        //Devuelvo el resultado modificado
        const [resultUpdated] = await pool.query('SELECT * FROM tgl_solic_movim WHERE id = ?', [req.params.id])
        res.json(resultUpdated[0]); //Los id deberían ser únicos  

    } catch (error) {
        return res.status(500).json({
            message: 'Error. Reporte a Censys SA!'
        })
    }
    
    
};


export const deleteSolicitudes = async (req, res) => {
    try {
        /* res.send("Eliminando solicitudes de movimientos sin confirmar del día no vigente."); */
        const [result] = await pool.query('DELETE FROM tgl_solic_movim WHERE id=?', [req.params.id]);

        if (result.affectedRows <= 0){
            return res.status(404).json({message: 'Solicitud no encontrada. No se eliminó nada!'})
        }

        res.sendStatus(204); // te envío tan solo un estado. El 204 significa que tdoo fue bien, pero no estoy respondiendo nada al cliente --> El cliente entenderá que sí pudo eliminar, pero no devuelve nada.

    } catch (error) {
        return res.status(500).json({
            message: 'Error. Reporte a Censys SA!'
        })
    }   
 
}