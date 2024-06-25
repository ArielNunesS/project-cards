const Cards = require('../models/CardsData');

module.exports = {

    async read(request, response) {

        const priority = request.query;

        const prioritiesCards = await Cards.find(priority);
        
        return response.json(prioritiesCards);
    },

    async update(request, response){
        const { id } = request.params;

        const cardUpdate = await Cards.findOne({_id : id});

        if(cardUpdate.priority){
            cardUpdate.priority = false;
        } else {
                cardUpdate.priority == false;
                cardUpdate.priority = true;
        }

        await cardUpdate.save();

        return response.json(cardUpdate);
    }
}
