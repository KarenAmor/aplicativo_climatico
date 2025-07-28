const form = document.getElementById('formularioUsuario');
const lista = document.getElementById('listaUsuarios');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;
  const documento = document.getElementById('document').value;
  const city = document.getElementById('city').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const id = Math.random()

  await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre,password,id,documento,city,age,gender })
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
