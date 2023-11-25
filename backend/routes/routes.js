const express=require('express')
const router= express.Router()
const User=require('../models/signupModel')

router.post('/signup',(req,res)=>{
    const signedupUser=new User({
        name:req.body.name
    })
    signedupUser.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})

module.exports=router