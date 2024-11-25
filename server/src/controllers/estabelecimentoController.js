import Estabelecimento from '../models/Estabelecimento.js';

import bcrypt from 'bcrypt';

export const EstabelecimentoController = {
  // Criar novo estabelecimento
  async create(req, res) {
    try {
      const {
        nome,
        cnpj,
        email,
        telefone,
        senha,
        endereco,
        tipoEndereco,
        descricao,
        horarioFuncionamento,
        capacidade,
        preferenciaMusical
      } = req.body;

      const estabelecimentoExistente = await Estabelecimento.findOne({ where: { cnpj } });
      if (estabelecimentoExistente) {
        return res.status(400).json({ error: 'CNPJ já cadastrado' });
      }

      const hashedSenha = await bcrypt.hash(senha, 10);

      const estabelecimento = await Estabelecimento.create({
        nome,
        cnpj,
        email,
        telefone,
        senha: hashedSenha,
        endereco,
        tipoEndereco,
        descricao,
        horarioFuncionamento,
        capacidade,
        preferenciaMusical
      });

      const { senha: _, ...estabelecimentoSemSenha } = estabelecimento.toJSON();
      res.status(201).json(estabelecimentoSemSenha);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar estabelecimento' });
    }
  },

  // Listar todos os estabelecimentos
  async index(req, res) {
    try {
      const estabelecimentos = await Estabelecimento.findAll({
        attributes: { exclude: ['senha'] }
      });
      res.json(estabelecimentos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar estabelecimentos' });
    }
  },

  // Buscar estabelecimento por ID
  async show(req, res) {
    try {
      const estabelecimento = await Estabelecimento.findByPk(req.params.id, {
        attributes: { exclude: ['senha'] }
      });
      if (!estabelecimento) {
        return res.status(404).json({ error: 'Estabelecimento não encontrado' });
      }
      res.json(estabelecimento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar estabelecimento' });
    }
  },

  // Atualizar estabelecimento
  async update(req, res) {
    try {
      const estabelecimento = await Estabelecimento.findByPk(req.params.id);
      if (!estabelecimento) {
        return res.status(404).json({ error: 'Estabelecimento não encontrado' });
      }

      if (req.body.senha) {
        req.body.senha = await bcrypt.hash(req.body.senha, 10);
      }

      await estabelecimento.update(req.body);
      
      const { senha: _, ...estabelecimentoAtualizado } = estabelecimento.toJSON();
      res.json(estabelecimentoAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar estabelecimento' });
    }
  },

  // Deletar estabelecimento
  async delete(req, res) {
    try {
      const estabelecimento = await Estabelecimento.findByPk(req.userId); // Usa req.userId do authMiddleware
      if (!estabelecimento) {
        return res.status(404).json({ error: 'Estabelecimento não encontrado' });
      }
  
      await estabelecimento.destroy();
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar estabelecimento:', error);
      res.status(500).json({ error: 'Erro ao deletar estabelecimento' });
    }
  },

  async getPerfil(req, res) {
    try {
      const estabelecimento = await Estabelecimento.findByPk(req.userId, {
        attributes: { 
          exclude: ['senha', 'resetToken', 'resetTokenExpiry'] 
        }
      });

      if (!estabelecimento) {
        return res.status(404).json({ error: 'Estabelecimento não encontrado' });
      }

      res.json(estabelecimento);
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      res.status(500).json({ error: 'Erro ao buscar perfil do estabelecimento' });
    }
  },

  async updatePerfil(req, res) {
    try {
      const estabelecimento = await Estabelecimento.findByPk(req.userId);
      
      if (!estabelecimento) {
        return res.status(404).json({ error: 'Estabelecimento não encontrado' });
      }
  
      const { senha, resetToken, resetTokenExpiry, ...dadosAtualizacao } = req.body;
  
      await estabelecimento.update(dadosAtualizacao);
      
      const { senha: _, resetToken: __, resetTokenExpiry: ___, ...estabelecimentoAtualizado } = estabelecimento.toJSON();
      
      res.json(estabelecimentoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar estabelecimento:', error);
      res.status(500).json({ error: 'Erro ao atualizar estabelecimento' });
    }
  }
};