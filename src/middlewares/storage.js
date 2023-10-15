const path =require("path");
const fs = require("fs");
const multer = require("multer");


const storageProducts = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../../public/images"));
    },
    filename : (req, file, cb) => {
        
         cb(null, `images-${Date.now()}${path.extname(file.originalname)}`);
    },
});
const upload = multer ({storage: storageProducts});


module.exports=upload;