const path =require("path");
const fs = require("fs");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../../public/images"));
    },
    filename : (req, file, cb) => {
        
         cb(null, `ìmages-${Date.now()}${path.extname(file.originalname)})`);
    },
});
const upload = multer ({storage: storage});


module.exports=upload;