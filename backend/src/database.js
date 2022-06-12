const mongoose= require("mongoose");

//Conexion to db
const URI=process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/basto'

mongoose.connect(URI)//db's name. OR mongodbAtlas 's url

const connection=mongoose.connection

connection.once('open', ()=>{ //once the connection is made
  console.log('DB connected to ', URI)
})