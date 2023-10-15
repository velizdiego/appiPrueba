const path= require("path");
const express= require("express");
const cors =require("cors")
const app = express();
const products = require("./routes/productsRoutes.js");
const connecToDb = require("./database/models/connect.js");
connecToDb ();

// config //
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// routes //
app.use("/products", products);


// error //
app.use(function(req, res, next)  {
    return res.status(404).json({
        status : 404,
        error : "not fount",
        message : "error en lo solicitado"
    });
});


app.listen(3003, () => console.log("puerto 3003 funcionando"));
