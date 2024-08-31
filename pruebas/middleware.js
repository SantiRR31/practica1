
//middleware
const middleware=((req, res, next)=>{
    const now = new Date();
    console.log(`Acceso a la pagina en: ${now}`);
    next();
    
});

module.exports = middleware;
