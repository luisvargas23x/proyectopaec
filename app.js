require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const involucradosRoutes = require('./routes/involucradosRoutes');
const aportesRoutes = require('./routes/aportesRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/involucrados', involucradosRoutes);
app.use('/api/aportes', aportesRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));