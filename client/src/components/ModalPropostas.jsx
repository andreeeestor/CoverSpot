import React, { useState } from 'react';
import { toast } from 'sonner';
import { Calendar, MusicNotes, MapPin, Clock, CurrencyCircleDollar } from '@phosphor-icons/react';

const ModalProposta = ({ bandaId, onClose }) => {
  const [formData, setFormData] = useState({
    dataEvento: '',
    horaInicio: '',
    horaFim: '',
    endereco: '',
    cacheEvento: '',
    mensagem: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/propostas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          ...formData,
          bandaId: bandaId
        })
      });

      if (response.ok) {
        toast.success('Proposta enviada com sucesso!');
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Erro ao enviar proposta');
      }
    } catch (error) {
      toast.error('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Enviar Proposta para Banda
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="dataEvento" className="block mb-2 text-sm font-medium text-gray-700">
              Data do Evento
            </label>
            <div className="flex items-center">
              <Calendar className="absolute left-3 text-gray-500" />
              <input
                type="date"
                id="dataEvento"
                name="dataEvento"
                value={formData.dataEvento}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="horaInicio" className="block mb-2 text-sm font-medium text-gray-700">
                Hora Início
              </label>
              <div className="flex items-center">
                <Clock className="absolute left-3 text-gray-500" />
                <input
                  type="time"
                  id="horaInicio"
                  name="horaInicio"
                  value={formData.horaInicio}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="horaFim" className="block mb-2 text-sm font-medium text-gray-700">
                Hora Fim
              </label>
              <div className="flex items-center">
                <Clock className="absolute left-3 text-gray-500" />
                <input
                  type="time"
                  id="horaFim"
                  name="horaFim"
                  value={formData.horaFim}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="endereco" className="block mb-2 text-sm font-medium text-gray-700">
              Endereço do Evento
            </label>
            <div className="flex items-center">
              <MapPin className="absolute left-3 text-gray-500" />
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                required
                placeholder="Rua, número, bairro"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="cacheEvento" className="block mb-2 text-sm font-medium text-gray-700">
              Cache do Evento
            </label>
            <div className="flex items-center">
              <CurrencyCircleDollar className="absolute left-3 text-gray-500" />
              <input
                type="number"
                id="cacheEvento"
                name="cacheEvento"
                value={formData.cacheEvento}
                onChange={handleInputChange}
                required
                placeholder="Valor do cachê"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-gray-700">
              Mensagem Adicional
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Detalhes adicionais sobre o evento"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <MusicNotes className="w-5 h-5" /> 
              Enviar Proposta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProposta;