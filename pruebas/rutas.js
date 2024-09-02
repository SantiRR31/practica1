const express=require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    const now = new Date();
    res.send(`Hola accediste en la fecha y hr: ${now}`);
    
});

router.get("/home",(req,res)=>{
    res.send("HOLA ESTAAS ENN HOME");
});

module.exports=router;