// chama o mongoose
const mongoose = require('mongoose');

// schema é uma 'tabela' (nesse caso de noSQL, apenas armazena os dados)
// nesse projeto os dados vão ser armazenados em forma de .json
const CardsDataSchema = new mongoose.Schema({   // criando schema
    title: String,      // definindo os dados
    notes: String,      // e o tipo de cada dado
    priority: Boolean,
});

// criando e exportando schema pelo comando 'mongoose.model'
// definindo nome ('Cards) e qual será o schema (CardsDataSchema)
module.exports = mongoose.model('Cards', CardsDataSchema);
