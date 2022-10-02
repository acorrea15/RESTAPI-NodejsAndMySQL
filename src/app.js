import express from "express";
import movimientosRoutes from './routes/movimientos.routes.js'
import indexRoutes from './routes/index.routes.js'

//Creo un servidor básico
const app = express();

app.use(express.json()); //Para que pueda entender el objeto json que se manda en el body el cliente en su petición. Recibo un objeto, lo paso a json y luego se los paso a las rutas.

app.use('/api/', indexRoutes);
app.use('/api', movimientosRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado. Verifique la configuración del Robot de ICF24'
    })
})

export default app;