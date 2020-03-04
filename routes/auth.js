const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "12345678";


router.post("/",async(req,res)=>
{
   // compare password and see if person is authenticate
  let user = await User.findOne({email:req.body.email});
  if (!user) 
  {
      return res.status(400).send("invalid login creadintional");
  }
  let isPwValid = user.password ===  req.body.password;
  if (!isPwValid)
  {
      return res.status(400).send("invalid login creadintional");
  }

  let token = jwt.sign({id: user._id,email:user.email},SECRET_KEY);
  res.send({
      token:token
  });
});

module.exports = router;
