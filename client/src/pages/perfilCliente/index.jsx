import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import axios from 'axios';

export default function PerfilClientePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [cliente, setCliente] = useState({
    nomeCover: '',
    nome: '',
    email: '',
    telefone: '',
    generoMusical: '',
    biografia: '',
    portfolio: '',
    disponibilidade: ''
  });

  const [formData, setFormData] = useState({...cliente});

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("Token não encontrado");
          navigate('/login');
          return;
        }
        
        const response = await axios.get('http://localhost:3000/api/banda/perfil', {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log("Dados recebidos:", response.data);
        setCliente(response.data);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
        setLoading(false);
      }
    };
  
    fetchCliente();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:3000/api/banda/update', formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      setCliente(response.data);
      setIsEditing(false);
      alert('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      if (error.response?.status === 401) {
        navigate('/login');
      } else {
        alert(error.response?.data?.error || 'Erro ao atualizar perfil');
      }
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:3000/api/banda/delete', {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
      navigate('/');
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      alert('Erro ao deletar conta');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
    <Sidebar active />
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Perfil da Banda</h1>
          <div className="space-x-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {isEditing ? 'Cancelar' : 'Editar'}
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Excluir Conta
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Banda
              </label>
              <input
                type="text"
                name="nomeCover"
                value={isEditing ? formData.nomeCover : cliente.nomeCover}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Responsável
              </label>
              <input
                type="text"
                name="nome"
                value={isEditing ? formData.nome : cliente.nome}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={isEditing ? formData.email : cliente.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={isEditing ? formData.telefone : cliente.telefone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gênero Musical
              </label>
              <input
                type="text"
                name="generoMusical"
                value={isEditing ? formData.generoMusical : cliente.generoMusical}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disponibilidade
              </label>
              <input
                type="text"
                name="disponibilidade"
                value={isEditing ? formData.disponibilidade : cliente.disponibilidade}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="Ex: Fins de semana, noites..."
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfólio
              </label>
              <textarea
                name="portfolio"
                value={isEditing ? formData.portfolio : cliente.portfolio}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows="3"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="Links para vídeos, apresentações anteriores..."
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Biografia
              </label>
              <textarea
                name="biografia"
                value={isEditing ? formData.biografia : cliente.biografia}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows="4"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="Conte um pouco sobre sua banda..."
              ></textarea>
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Salvar Alterações
              </button>
            </div>
          )}
        </form>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirmar Exclusão</h3>
            <p className="mb-6">Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}