const express = require('express');
const router = express.Router();
const Involucrado = require('../models/Involucrado');

router.post('/', async (req, res) => {
  const data = new Involucrado(req.body);
  await data.save();
  res.json(data);
});

router.get('/', async (req, res) => {
  const datos = await Involucrado.find();
  res.json(datos);
});

module.exports = router;