const db = require('../config/db');

// LISTAR
exports.getTarefas = (req, res) => {
  db.query('SELECT * FROM tarefa', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// BUSCAR POR ID
exports.getTarefaById = (req, res) => {
  db.query('SELECT * FROM tarefa WHERE id=?', [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.json(result[0]);
    });
};

// FUNÇÃO DE VALIDAÇÃO (reutilizada nas outras funcoes)
const validarCampos = (titulo, descricao, status, prazo) => {
  if (!titulo || !descricao || !status || !prazo) {
    return "Todos os campos são obrigatórios!";
  }

  const statusValidos = ['pendente', 'iniciada', 'atrasada'];

  if (!statusValidos.includes(status)) {
    return "Status inválido!";
  }

  return null;
};

// CRIAR
exports.createTarefa = (req, res) => {
  const { titulo, descricao, status, prazo } = req.body;

  const erro = validarCampos(titulo, descricao, status, prazo);
  if (erro) return res.status(400).json({ erro });

  db.query(
    'INSERT INTO tarefa (titulo, descricao, status, prazo) VALUES (?, ?, ?, ?)',
    [titulo, descricao, status, prazo],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensagem: 'Tarefa criada!' });
    }
  );
};

// ATUALIZAR
exports.updateTarefa = (req, res) => {
  const { titulo, descricao, status, prazo } = req.body;

  const erro = validarCampos(titulo, descricao, status, prazo);
  if (erro) return res.status(400).json({ erro });

  db.query(
    'UPDATE tarefa SET titulo=?, descricao=?, status=?, prazo=? WHERE id=?',
    [titulo, descricao, status, prazo, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.affectedRows === 0) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.json({ mensagem: 'Atualizada!' });
    }
  );
};

// DELETAR
exports.deleteTarefa = (req, res) => {
  db.query('DELETE FROM tarefa WHERE id=?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    res.json({ mensagem: 'Deletada!' });
  });
};