import Estabelecimento from '../models/Estabelecimento.js';
import BandCover from '../models/BandaCover.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "sua_chave_secreta_aqui"; 

export const AuthController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const estabelecimento = await Estabelecimento.findOne({ where: { email } });
      const bandaCover = await BandCover.findOne({ where: { email } });

      let user = null;
      let tipo = null;

      if (estabelecimento) {
        user = estabelecimento;
        tipo = 'estabelecimento';
      } else if (bandaCover) {
        user = bandaCover;
        tipo = 'banda';
      } else {
        return res.status(401).json({ error: 'Usuário não encontrado' });
      }

      const senhaCorreta = await bcrypt.compare(senha, user.senha);
      if (!senhaCorreta) {
        return res.status(401).json({ error: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { 
          id: user.id, 
          email: user.email,
          tipo: tipo 
        },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      const { senha: _, ...userSemSenha } = user.toJSON();

      res.json({
        user: userSemSenha,
        tipo,
        token
      });

    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ error: 'Erro ao realizar login' });
    }
  }
};