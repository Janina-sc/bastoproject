const express =require('express');
const cors= require('cors');
const app=express();




//configuration
app.set('port', process.env.Port||4000);



//Middlewares
app.use(cors());
app.use(express.json());//give and receive json

//Routes
app.get('/', (req, res)=>{
    res.send("Hola back")
})

//route for cattle's api
app.use('/api/cattles', require('./routes/index'))



module.exports= app;