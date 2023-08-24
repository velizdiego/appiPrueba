const mongoose = require("mongoose");


module.exports = async () => {
    // base de datos //
    try{
     await mongoose.connect("mongodb://127.0.0.1:27017/appiPrueba");
     console.log("esta conectado a la db");
    } catch (error){
    console.log(error);
    }

};