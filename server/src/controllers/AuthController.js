import Estabelecimento from '../models/Estabelecimento.js';
import BandCover from '../models/BandaCover.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { Op } from 'sequelize';

const JWT_SECRET = "sua_chave_secreta_aqui"; 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

const AuthController = {
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
  },

  async requestPasswordReset(req, res) {
    try {
      console.log('Received password reset request:', req.body);
      
      const { email } = req.body;
      
      if (!email) {
        console.log('No email provided in request');
        return res.status(400).json({ error: 'Email é obrigatório' });
      }

      console.log('Searching for user with email:', email);
      
      const estabelecimento = await Estabelecimento.findOne({ where: { email } });
      const bandaCover = await BandCover.findOne({ where: { email } });
      
      console.log('Search results:', {
        estabelecimentoFound: !!estabelecimento,
        bandaCoverFound: !!bandaCover
      });

      const user = estabelecimento || bandaCover;
      
      if (!user) {
        console.log('No user found with email:', email);
        return res.status(404).json({ error: 'Email não encontrado no sistema' });
      }

      const resetToken = crypto.randomBytes(32).toString('hex');
      const resetTokenExpiry = new Date(Date.now() + 3600000); 
      
      console.log('Generated reset token:', resetToken);

      try {
        if (estabelecimento) {
          await estabelecimento.update({
            resetToken,
            resetTokenExpiry
          });
        } else {
          await bandaCover.update({
            resetToken,
            resetTokenExpiry
          });
        }
      } catch (updateError) {
        console.error('Error updating user with reset token:', updateError);
        return res.status(500).json({ error: 'Erro ao gerar token de redefinição' });
      }

      const resetLink = `http://localhost:5173/autenticacao/login?token=${resetToken}`;

      try {
        await transporter.sendMail({
          from: 'docaminhaochicao62@gmail.com',
          to: email,
          subject: 'Redefinição de Senha - CoverSpot',
          html: `
            <h1>Redefinição de Senha</h1>
            <p>Você solicitou a redefinição de senha.</p>
            <p>Clique no link abaixo para redefinir sua senha:</p>
            <a href="${resetLink}">Redefinir Senha</a>
            <p>Este link é válido por 1 hora.</p>
            <p>Se você não solicitou esta redefinição, ignore este email.</p>
          `
        });
        
        console.log('Reset email sent successfully');
        res.json({ message: 'Email de redefinição enviado com sucesso' });
      } catch (emailError) {
        console.error('Error sending reset email:', emailError);
        return res.status(500).json({ error: 'Erro ao enviar email de redefinição' });
      }

    } catch (error) {
      console.error('Error in requestPasswordReset:', error);
      res.status(500).json({ error: 'Erro ao processar solicitação de redefinição de senha' });
    }
  },

  async resetPassword(req, res) {
    try {
      const { token, newPassword } = req.body;

      if (!token || !newPassword) {
        return res.status(400).json({ error: 'Token e nova senha são obrigatórios' });
      }

      const estabelecimento = await Estabelecimento.findOne({
        where: {
          resetToken: token,
          resetTokenExpiry: { [Op.gt]: new Date() }
        }
      });

      const bandaCover = await BandCover.findOne({
        where: {
          resetToken: token,
          resetTokenExpiry: { [Op.gt]: new Date() }
        }
      });

      const user = estabelecimento || bandaCover;

      if (!user) {
        return res.status(400).json({ error: 'Token inválido ou expirado' });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      try {
        if (estabelecimento) {
          await estabelecimento.update({
            senha: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null
          });
        } else {
          await bandaCover.update({
            senha: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null
          });
        }
        
        res.json({ message: 'Senha atualizada com sucesso' });
      } catch (updateError) {
        console.error('Error updating password:', updateError);
        res.status(500).json({ error: 'Erro ao atualizar senha' });
      }

    } catch (error) {
      console.error('Error in resetPassword:', error);
      res.status(500).json({ error: 'Erro ao redefinir senha' });
    }
  }
};

export default AuthController;