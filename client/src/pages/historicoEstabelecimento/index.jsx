import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Calendar, CheckCircle, XCircle, Clock, MusicNotes } from '@phosphor-icons/react';
import Sidebar from '../../components/Sidebar';

const HistoricoPropostasPage = () => {
  const [propostas, setPropostas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPropostas() {
      try {
        const response = await fetch('http://localhost:3000/api/estabelecimento/propostas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPropostas(data);
        } else {
          toast.error('Erro ao carregar histórico de propostas');
        }
      } catch (error) {
        toast.error('Erro ao conectar com o servidor');
      } finally {
        setLoading(false);
      }
    }

    fetchPropostas();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Carregando...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Histórico de Propostas Enviados</h2>

          {propostas.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-lg">Nenhuma proposta enviada.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {propostas.map((proposta) => (
                <div
                  key={proposta.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {proposta.BandCover.nomeCover}
                    </h3>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold uppercase
                      ${proposta.status === 'pendente' ? 'bg-yellow-100 text-yellow-800' :
                        proposta.status === 'aceita' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'}
                    `}>
                      {proposta.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(proposta.dataEvento).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{proposta.horaInicio} - {proposta.horaFim}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MusicNotes className="w-5 h-5" />
                      <span>{proposta.mensagem}</span>
                    </div>
                  </div>

                  <p className="text-gray-700"><strong>Cache:</strong> R$ {proposta.cacheEvento}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoricoPropostasPage;
