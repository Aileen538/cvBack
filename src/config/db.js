const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL);
console.log('conexion a MongoDB Atlas')
