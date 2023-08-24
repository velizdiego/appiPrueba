const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usersControllers");

router.put("/userUpdate/:id", controllers.userUpdate);
router.get("/userList/", controllers.userList);
router.get("/userDetail/:id", controllers.userDetail);
router.delete("userDelete/:id", controllers.userDelete);


module.exports=router;



