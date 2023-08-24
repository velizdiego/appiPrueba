
const Product = require("../database/models/Product");

let controllers = {
    create: async (req, res) => {
        
        try{
            let product = {
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            brand : req.body.brand,
            images :req.file.filename,
            colors: ["Negro", "Rojo", "Azul", "Blanco"]
            };
      
        const productDataBase = await Product.create(product);
        res.status(201).json(productDataBase);

        } catch (error){
            console.log(error);
            if (error.errors.name){
                return res.status(400).json({message: " falta el campo name"});
            }
               res.status(500).json({message: "internal server error"});
        }
      
      
    
},
    update : async (req, res) => {
          const product = await Product.findByIdAndUpdate(req.params.id, req.body);
          return res.status(200).json(product);
    },
        list: async(req, res) =>{
           const products = await Product.find({});
            res.status(200).json(products);    
        },
        detail: async (req, res) => {
           const product = await Product.find({_id: req.params.id});
           res.json(product);
        },
        delete: async (req, res) => {
            const product = await Product.deleteOne({_id: req.params.id});
            res.json(200).json(product);
         },
         seeker: async (req, res) => {
            const product = await Product.find({_id: req.query.name});
            res.json(product);
         },
     
     
};

module.exports= controllers;