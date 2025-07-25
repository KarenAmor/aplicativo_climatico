const form = document.getElementById('formularioUsuario');
const lista = document.getElementById('listaUsuarios');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;

  await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  });

  cargarUsuarios();
  form.reset();
});

async function cargarUsuarios() {
  const res = await fetch('/api/usuarios');
  const usuarios = await res.json();

  lista.innerHTML = '';
  usuarios.forEach((usuario) => {
    const li = document.createElement('li');
    li.textContent = usuario.nombre;
    lista.appendChild(li);
  });
}

cargarUsuarios();
