const mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URL);
// console.log('conexion a MongoDB Atlas')

mongoose.connect('mongodb+srv://538aileen:AileenMontes1@cluster0.vpzjrqb.mongodb.net/', {

}).then(() => {
  console.log("Conexión a MongoDB Atlas establecida correctamente");
}).catch(err => {
  console.error("Error al conectar a MongoDB Atlas:", err);
});

