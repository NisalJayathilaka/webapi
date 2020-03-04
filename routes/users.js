const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/",async(req,res)=>
{
   // creaet user and 
  let userToBeCreated = new User ({
      username: req.body.username,
      emial: req.body.emial,
      password:req.body.password
   });

   await userToBeCreated.save();
   return res.send({
      username:userToBeCreated.username,
      emial:userToBeCreated.emial
                  
   });
})

module.exports = router;
