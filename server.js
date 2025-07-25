const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usersRoutes');
const path = require('path');

app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
app.use('/api/usuarios', usuarioRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});