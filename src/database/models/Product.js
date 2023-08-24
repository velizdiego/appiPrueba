const mongoose = require("mongoose");

 const productSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    price: Number,
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: String,
    colors: [String]
}, {
   timestamps : true,
   collection : "products"
}
);

const Product = mongoose.model("Product",productSchema);
module.exports= Product;