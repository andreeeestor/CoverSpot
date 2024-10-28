import express from "express";

const app = express();
const PORT = 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log('Servidor rodando na porta 3000');
    });
  });
