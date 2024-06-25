const Cards = require('../models/CardsData');

module.exports = {

    async update(request, response) {
        const { id } = request.params;
        const { notes } = request.body;

        const cardUpdate = await Cards.findOne({ _id : id });

        if(notes){
            cardUpdate.notes = notes;
        
            await cardUpdate.save();
        }

        return response.json(cardUpdate);
    }
}
