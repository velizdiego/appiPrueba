const  User = require("../database/models/user");
 const controllers = {
    userCreate : async (req, res) => {
        try {
            let user ={
                name : req.body.name,
                surname : req.body.surname,
                userNumber : req.body.userNumber,
                email : req.body.email,
                password : req.body.password,
            }
            
            const userDataBase = await User.create(req.params.id, req.body);
                return res.status(201).json(userDataBase)
        } catch (error) {
            if (error.errors.name)
            return res.status(400).json("falta el campo name");
        }
            res.status(500).json("internal error server");
    },
    userUpdate : async (req, res) => {
        const user = await User.findByIdAndUpdate({_id : req.params.id});
        return res.status(200).json(user)
    },
    userList : async (req, res) => {
        const users = await User.find ({});
         return res.status(200).json(users)
    },
    userDetail : async (req, res) => {
        const user = await User.find({_id: req.params.id});
        res.json(user)
    },
    userDelete : async (req, res) => {
        const user = await User.deleteOne({_id: req.params.id});
         return res.status(200).json(user)
    },
 };


 module.exports= controllers;