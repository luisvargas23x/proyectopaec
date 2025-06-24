const mongoose = require('mongoose');

const aporteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },           // Nombre del participante
  tipo: { type: String, required: true },             // Tipo de persona (Estudiante, Docente, etc.)
  kilos: { type: Number, required: true },            // Kilos reciclados
  material: { type: String, required: true },         // Tipo de material reciclado
  estadoMaterial: { type: String, required: true },   // Limpio, sucio, cortado
  lugarRecoleccion: { type: String, required: true }, // Lugar donde se depositó
  fechaEntrega: { type: String, required: true },     // Fecha de entrega (formato YYYY-MM-DD)
  horaEntrega: { type: String, required: true }       // Hora de entrega (formato HH:mm)
});

module.exports = mongoose.model('Aporte', aporteSchema);
