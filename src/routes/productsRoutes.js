const express = require("express");
const router = express.Router();
const controllers = require("../controllers/productsControllers");
const logs = require("../middlewares/logger");
const upload = require("../middlewares/storage");

 

 

router.get("/list", logs, controllers.list);
router.get("/detail/:id", controllers.detail);
router.put("/update/:id", controllers.update);
router.delete("/delete/:id", controllers.delete);
router.post("/create", upload.single("images"), controllers.create);


module.exports= router;