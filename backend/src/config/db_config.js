// chama o mongoose
const mongoose = require('mongoose');

// o link vem direto do Mongo DB para fazer a conexão com o banco de dados
// guardar o link em uma variável
const dbConfig = 'mongodb+srv://ariel:9108@cluster0.wjb1vpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(dbConfig, {     // efetua a conexão com o banco de dados
    useNewUrlParser: true,  // recomendável sempre definir como true
    useUnifiedTopology: true,
});

// exporta a conexão para usar em todo o projeto
module.exports = connection;
