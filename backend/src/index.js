const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
      nome: "User Teste",  
      profissão: "Cientista"
    });
});

app.listen(8800);
