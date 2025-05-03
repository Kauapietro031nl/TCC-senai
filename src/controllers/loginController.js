const bcrypt = require('bcrypt');
const db = require('../config/db');
exports.login = (req, res) => {
  const { email, senha } = req.body;

  let sql = 'SELECT * FROM login WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro no servidor.' });
    }

    if (results.length > 0) {
      const user = results[0];

      bcrypt.compare(senha, user.senha, (err, match) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Erro ao comparar a senha.' });
        }

        if (match) {
          res.json({ success: true, message: 'Login realizado com sucesso!', name: user.nome });
        } else {
          res.status(401).json({ success: false, message: 'Senha incorreta.' });
        }
      });
    } else {
      res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
    }
  });
};
