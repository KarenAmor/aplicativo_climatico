const fs = require('fs');
const path = require('path');
const rutaUsuarios = path.join(__dirname, '../data/users.json');

const obtenerUsuarios = (req, res) => {
  const data = fs.readFileSync(rutaUsuarios);
  const usuarios = JSON.parse(data);
  res.json(usuarios);
};

const agregarUsuario = (req, res) => {
  const nuevoUsuario = req.body;
  const data = fs.readFileSync(rutaUsuarios);
  const usuarios = JSON.parse(data);

  usuarios.push(nuevoUsuario);
  fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));

  res.status(201).json({ mensaje: 'Usuario agregado' });
};

module.exports = {
  obtenerUsuarios,
  agregarUsuario
};