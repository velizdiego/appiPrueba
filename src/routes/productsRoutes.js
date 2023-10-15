const express = require("express");
const router = express.Router();
const controllers = require("../controllers/productsControllers");
const logs = require("../middlewares/logger");
const upload = require("../middlewares/storage");

 

 
router.get("/buscar", logs, controllers.buscador);
router.get("/list", logs, controllers.list);
router.post("/create", upload.single('file'), controllers.create);
router.get("/detail/:id",logs, controllers.detail);
router.put("/update/:id",logs, controllers.update);
router.delete("/delete/:id",logs, controllers.delete);


module.exports= router;