import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM funcionarios";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao buscar os usuários.");
    }

    return res.status(200).json(data);
  })
};

export const addUser = (req, res) => {
  const q = "INSERT INTO funcionarios (`nome`) VALUES(?)";
  const values = [req.body.name];

  db.query(q, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao adicionar o usuário.");
    }

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM funcionarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao deletar o usuário.");
    }

    return res.status(200).json("Usuário deletado com sucesso.")
  })
}