const express=require("express");
const middleware=require("./middleware");
const rutas=require("./rutas");

require("dotenv").config();
const app=express();
app.use(middleware);

app.use("/", rutas);


const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en: http://localhost:"+port);
    
});