import {Router} from 'express'; //Para poder crear toda una sección de rutas es como agrupar todas las rutas y colocarles un nombre
import {getMovimientos, createSolicitud, updateSolicitud, deleteSolicitudes, getMovimiento} from '../controllers/movimientos.controllers.js'
//Le digo a Express que tengo una especie de grupos de routers
const router = Router(); // Creo un enrutador que viene a partir de la ejecución del Router()

//router tiene todos los métodos: GET, PUT, POST, DELETE
 
//Endpoints para consultarlos desde la aplicación cliente (COA através del bot de ICF24)
router.get('/movimientos', getMovimientos);  

router.get('/movimientos/:id', getMovimiento);

router.post('/movimientos', createSolicitud);

/* router.put('/movimientos/:id', updateSolicitud); */
router.patch('/movimientos/:id', updateSolicitud);

router.delete('/movimientos/:id', deleteSolicitudes);



//Ya terminé de escribir el código, entonces voy a exportarlo
export default router;