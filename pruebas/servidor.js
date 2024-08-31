const express=require("express");
const middleware=require("./middleware");

require("dotenv").config();
const app=express();
app.use(middleware);


app.get("/",(req,res)=>{
    const now = new Date();
    res.send(`Hola accediste en la fecha y hr: ${now}`);
    
});

app.get("/home",(req,res)=>{
    res.send("HOLA ESTAAS ENN HOME");
});





const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en: http://localhost:"+port);
    
});