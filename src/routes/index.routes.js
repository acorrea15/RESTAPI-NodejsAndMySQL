import {Router} from 'express';
import {ping} from '../controllers/index.controllers.js'
//Creo enrutador a partir de Router

const router = Router();

router.get('/ping', ping);

export default router;