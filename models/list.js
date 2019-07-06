const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Hombre', 'Mujer', 'Otro']
    }
});

const pacientesList = module.exports = mongoose.model('pacientesList', pacienteSchema );

//list.find() returns all the lists
module.exports.getAllLists = (callback) => {
    pacientesList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    pacientesList.remove(query, callback);
}