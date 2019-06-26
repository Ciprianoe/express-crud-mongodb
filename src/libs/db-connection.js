const mongoose = require('mongoose');

let db;

module.exports = function Connection(){
    if (!db) {
        // aca si dejo mongoose.connect me dara error si no tengo creada esa bd es por esto
        // que la cambio a mongoose.createConnection y usar {useNewUrlParser:true} en vez de useMongoCLient
       db = mongoose.createConnection('mongodb://localhost/crud-example', {useNewUrlParser:true});
    }
    return db;
}