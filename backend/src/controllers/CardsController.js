const Cards = require('../models/CardsData');

module.exports = {

    // função chamada ao executar um POST no caminho /cards
    async create(request, response) {               // criar um registro no banco de dados
        const { title, notes, priority } = request.body;        // o body do registro receberá title, notes e priority

        if(!notes || !title) {                      // algum campo vazio = retorna erro
            return response.status(400).json({error: "Necessário um título/anotação"});
        }

        const CardsCreated = await Cards.create({       // acessa o banco e cria o registro com os parâmetros abaixo
            title,
            notes,
            priority
        });

        return response.json(CardsCreated);             // retorna o registro criado
},

    // função chamada ao executar um GET no caminho /cards
    async read(request, response) {                 // ler os registros do banco de dados
        const CardsList = await Cards.find();       // async e await para o servidor prosseguir somente ao obter os dados

        return response.json(CardsList);            // retorna uma lista com todos os dados encontrados
    },

    // função chamada ao executar um DELETE no caminho /cards
    async delete(request, response){                // deletar um registro no banco de dados
        const { id } = request.params; // params é o ':id'na rota do delete, no arquivo routes
    
        const CardsDelete = await Cards.findOneAndDelete({ _id : id });
        // busca um registro no banco de dados com base no parâmetro '_id' (gerado automaticamente ao criar o registro)
        // e verifica se é igual ao 'id' (caminho final da rota => /cards:id)

        if(CardsDelete){              // se encontrar deleta o registro
            return response.json(CardsDelete);
        }

        // se não encontrar retorna erro
        return response.status(401).json({error: "Nenhum registro encontrado para deletar"});
    }
}
