import BandCover from '../models/BandaCover.js';
import bcrypt from 'bcrypt';
import Proposta from '../models/Proposta.js';
import Estabelecimento from '../models/Estabelecimento.js';

export const BandaCoverController = {
  // Criar nova banda cover
  async create(req, res) {
    try {
      const {
        nomeCover,
        nome,
        email,
        telefone,
        senha,
        generoMusical,
        biografia,
        portfolio,
        disponibilidade
      } = req.body;

      const bandaExistente = await BandCover.findOne({ where: { nomeCover } });
      if (bandaExistente) {
        return res.status(400).json({ error: 'Nome da banda já cadastrado' });
      }
      
      const hashedSenha = await bcrypt.hash(senha, 10);

      const banda = await BandCover.create({
        nomeCover,
        nome,
        email,
        telefone,
        senha: hashedSenha,
        generoMusical,
        biografia,
        portfolio,
        disponibilidade
      });

      const { senha: _, ...bandaSemSenha } = banda.toJSON();
      res.status(201).json(bandaSemSenha);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar banda cover' });
    }
  },

  // Listar todas as bandas
  async index(req, res) {
    try {
      const bandas = await BandCover.findAll({
        attributes: { exclude: ['senha'] }
      });
      res.json(bandas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar bandas cover' });
    }
  },

  // Buscar banda por ID
  async show(req, res) {
    try {
      const banda = await BandCover.findByPk(req.params.id, {
        attributes: { exclude: ['senha'] }
      });
      if (!banda) {
        return res.status(404).json({ error: 'Banda cover não encontrada' });
      }
      res.json(banda);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar banda cover' });
    }
  },

  // Buscar perfil da banda autenticada
  async getPerfil(req, res) {
    try {
      const banda = await BandCover.findByPk(req.userId, {
        attributes: { 
          exclude: ['senha', 'resetToken', 'resetTokenExpiry'] 
        }
      });

      if (!banda) {
        return res.status(404).json({ error: 'Banda não encontrada' });
      }

      res.json(banda);
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      res.status(500).json({ error: 'Erro ao buscar perfil da banda' });
    }
  },

  // Atualizar perfil da banda autenticada
  async updatePerfil(req, res) {
    try {
      const banda = await BandCover.findByPk(req.userId);
      
      if (!banda) {
        return res.status(404).json({ error: 'Banda não encontrada' });
      }
  
      const { senha, resetToken, resetTokenExpiry, ...dadosAtualizacao } = req.body;
  
      await banda.update(dadosAtualizacao);
      
      const { senha: _, resetToken: __, resetTokenExpiry: ___, ...bandaAtualizada } = banda.toJSON();
      
      res.json(bandaAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar banda:', error);
      res.status(500).json({ error: 'Erro ao atualizar banda' });
    }
  },

  // Deletar banda autenticada
  async delete(req, res) {
    try {
      const banda = await BandCover.findByPk(req.userId);
      if (!banda) {
        return res.status(404).json({ error: 'Banda não encontrada' });
      }

      await banda.destroy();
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar banda:', error);
      res.status(500).json({ error: 'Erro ao deletar banda' });
    }
  },

  async getPropostas(req, res) {
    try {
      const propostas = await Proposta.findAll({
        where: { bandaId: req.userId }, // ID da banda autenticada
        include: [{ model: Estabelecimento, attributes: ['nome', 'email'] }]
      });
      res.json(propostas);
    } catch (error) {
      console.error('Erro ao buscar propostas:', error);
      res.status(500).json({ error: 'Erro ao buscar propostas' });
    }
  },
};