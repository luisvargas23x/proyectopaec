const mongoose = require('mongoose');
const involucradoSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  numero: String,
  correo: String,
  edad: Number
});
module.exports = mongoose.model('Involucrado', involucradoSchema);