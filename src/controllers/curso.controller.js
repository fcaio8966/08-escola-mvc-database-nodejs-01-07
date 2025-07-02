// Importar o model de cursos
const cursoModel = require("../models/curso.model")

async function listar(request, response) {
  // Chamar a função listarTodosCursos do model
  const cursos = await cursoModel.listarTodosCursos()
  
  

  response.json('listar-cuurso')
}

function criar(request, response) {
  response.send("Função responsável por criar um curso")
}

function atualizar(request, response) {
  response.send("Função responsável por atualizar um curso")
}

function deletar(request, response) {
  response.send("Função responsável por deletar um curso")
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
}