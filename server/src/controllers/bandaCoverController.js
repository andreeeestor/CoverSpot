import BandCover from '../models/BandaCover.js';

import bcrypt from 'bcrypt';

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

      // Verificar se já existe banda com este nome
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

      // Removendo a senha do retorno
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

  // Atualizar banda
  async update(req, res) {
    try {
      const banda = await BandCover.findByPk(req.params.id);
      if (!banda) {
        return res.status(404).json({ error: 'Banda cover não encontrada' });
      }

      if (req.body.senha) {
        req.body.senha = await bcrypt.hash(req.body.senha, 10);
      }

      await banda.update(req.body);
      
      const { senha: _, ...bandaAtualizada } = banda.toJSON();
      res.json(bandaAtualizada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar banda cover' });
    }
  },

  // Deletar banda
  async delete(req, res) {
    try {
      const banda = await BandCover.findByPk(req.params.id);
      if (!banda) {
        return res.status(404).json({ error: 'Banda cover não encontrada' });
      }

      await banda.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar banda cover' });
    }
  }
};