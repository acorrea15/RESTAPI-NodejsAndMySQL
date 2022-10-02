import app from './app.js'

import {PORT} from './config.js'

app.listen(PORT);
console.log("The server is running on port " + PORT + ". Waiting for requests from the ICF24 robot...") 
