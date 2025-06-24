const express = require('express');
const router = express.Router();
const Aporte = require('../models/Aporte');
const Involucrado = require('../models/Involucrado');

router.post('/', async (req, res) => {
  const existe = await Involucrado.findOne({ nombre: req.body.nombre });
  if (!existe) return res.status(400).json({ error: 'Nombre no registrado' });

  const data = new Aporte(req.body);
  await data.save();
  res.json(data);
});

router.get('/', async (req, res) => {
  const datos = await Aporte.find();
  res.json(datos);
});

module.exports = router;