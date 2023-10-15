
const Product = require("../database/models/Product");

let controllers = {
    create: async (req, res) => {                                                                                                                                                                                              
        console.log("body",req.body);
        try {
            let product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                discount: req.body.discount,
                brand: req.body.brand,
               images: req.body.file? req.body.file: "image.defaul.png",
              
                colors: ["Negro", "Rojo", "Azul", "Blanco"]
            };

            const productDataBase = await Product.create(product);
            res.status(201).json(productDataBase);

        } catch (error) {
          
           return res.status(500).json({ message: error.message });
        }



    },
    update: async (req, res) => {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(product);
    },
    list: async (req, res) => {
        const products = await Product.find({});
        res.status(200).json(products);
    },
    detail: async (req, res) => {
        const product = await Product.findOne({ _id: req.params.id });
        res.json(product);
    },
    delete: async (req, res) => {
        const product = await Product.deleteOne({ _id: req.params.id });
        res.json(200).json(product);
    },
    seeker: async (req, res) => {
        const product = await Product.find({ _id: req.query.name });
        res.json(product);
    },
    buscador: async (req, res) => {
    
        if (req.res.query){
            return res.status(404).json({mesage: "product not found"});
        }
        const product = await Product.find({"name" : { $regex: ".*" + req.query.name + ".*"} });
        res.json(product);
    },


};

module.exports = controllers;