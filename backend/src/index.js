const express = require('express');     // utilizar o express.js
const routes = require('./routes');
const cors = require('cors');

const app = express();          // guarda 'express()' na variável app
require('./config/db_config.js');

app.use(cors());
app.use(express.json());       
app.use(routes);

app.listen(8800); // abre o app na porta  com node
