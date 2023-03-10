'use strict';

const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const celular = document.getElementById('celular');

const limparFormulario = () => {
  nome.value = '';
  sobrenome.value = '';
  email.value = '';
  celular.value = '';
};

const criarUsuario = async (nome, sobrenome, email, celular) => {
  fetch('http://localhost:3000/cliente', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, sobrenome, email, celular }),
  })
    .then((response) => response.json())
    .then((json) => alert(json)
      // console.log(json).catch((error) => console.log('Authorization  failed: ' + error.message)),
    );

  limparFormulario();
};

document.getElementById('cadastrarUsuario').addEventListener('click', function () {
  criarUsuario(nome.value, sobrenome.value, email.value, celular.value);
});
