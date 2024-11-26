import { useState } from 'react';
import { toast } from 'sonner';

function PropostaForm({ bandaId, onClose }) {
  const [mensagem, setMensagem] = useState('');
  const [dataEvento, setDataEvento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/propostas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ bandaId, mensagem, dataEvento }),
      });

      if (response.ok) {
        toast.success('Proposta enviada com sucesso!');
        onClose(); // Fecha o formulário após enviar
      } else {
        const errorData = await response.json();
        toast.error(`Erro: ${errorData.error}`);
      }
    } catch (error) {
      toast.error('Erro ao conectar com o servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <textarea
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />
      <input
        type="date"
        value={dataEvento}
        onChange={(e) => setDataEvento(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded w-full">
        Enviar Proposta
      </button>
    </form>
  );
}

export default PropostaForm;
