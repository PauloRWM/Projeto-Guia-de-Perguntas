const Sequelize = require("sequelize");

const connection = require("./database.js");

const Pergunta = connection.define("pergunta", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false })
  .then(() => {
    console.log("Tabela Criada/Atualizada");
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ${error}`);
  });
module.exports = Pergunta