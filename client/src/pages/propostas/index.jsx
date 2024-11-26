import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Clock, 
  MapPin, 
  MusicNotes, 
  ChatCircleText,
  CurrencyCircleDollar
} from '@phosphor-icons/react';
import Sidebar from "../../components/Sidebar";

function PropostasPage() {
  const [propostas, setPropostas] = useState([]);
  const [filterStatus, setFilterStatus] = useState('todas');

  useEffect(() => {
    async function fetchPropostas() {
      try {
        const response = await fetch('http://localhost:3000/api/banda/propostas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setPropostas(data);
        } else {
          toast.error('Erro ao carregar propostas');
        }
      } catch (error) {
        toast.error('Erro ao conectar com o servidor');
      }
    }

    fetchPropostas();
  }, []);

  async function atualizarStatusProposta(id, status) {
    try {
      const response = await fetch(`http://localhost:3000/api/propostas/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ status }),
      });
  
      if (response.ok) {
        // Atualiza o status localmente
        setPropostas(propostas.map(proposta => 
          proposta.id === id ? {...proposta, status} : proposta
        ));
        toast.success(`Proposta ${status}`);
      } else {
        toast.error('Erro ao atualizar a proposta');
      }
    } catch (error) {
      toast.error('Erro ao conectar com o servidor');
    }
  }

  // Função para renderizar o ícone de status
  const renderStatusIcon = (status) => {
    switch(status) {
      case 'pendente':
        return <Clock className="text-yellow-500 w-5 h-5" />;
      case 'aceita':
        return <CheckCircle className="text-green-500 w-5 h-5" />;
      case 'recusada':
        return <XCircle className="text-red-500 w-5 h-5" />;
      default:
        return null;
    }
  };

  // Filtrar propostas baseado no status
  const filteredPropostas = filterStatus === 'todas' 
    ? propostas 
    : propostas.filter(proposta => proposta.status === filterStatus);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Propostas Recebidas</h2>
          
          {/* Filtros de Status */}
          <div className="mb-6 flex space-x-2">
            {['todas', 'pendente', 'aceita', 'recusada'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterStatus === status 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {status === 'todas' ? 'Todas' : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {filteredPropostas.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-lg">Nenhuma proposta encontrada.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPropostas.map((proposta) => (
                <div 
                  key={proposta.id} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      {proposta.Estabelecimento.nome}
                      {renderStatusIcon(proposta.status)}
                    </h3>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold uppercase
                      ${proposta.status === 'pendente' ? 'bg-yellow-100 text-yellow-800' 
                        : proposta.status === 'aceita' ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'}
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
    <MapPin className="w-5 h-5" />
    <span>{proposta.endereco}</span>
  </div>
  <div className="flex items-center gap-2 text-gray-600">
    <CurrencyCircleDollar className="w-5 h-5" />
    <span>{`R$ ${proposta.cacheEvento}`}</span>
  </div>
</div>


                  <div className="flex items-center gap-2 mb-4 text-gray-700">
                    <ChatCircleText className="w-5 h-5" />
                    <p>{proposta.mensagem}</p>
                  </div>

                  {proposta.status === 'pendente' && (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => atualizarStatusProposta(proposta.id, 'aceita')}
                        className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" /> Aceitar
                      </button>
                      <button
                        onClick={() => atualizarStatusProposta(proposta.id, 'recusada')}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-5 h-5" /> Recusar
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropostasPage;

// import { useEffect, useState } from 'react';
// import { toast } from 'sonner';
// import Sidebar from "../../components/Sidebar"

// function PropostasPage() {
//   const [propostas, setPropostas] = useState([]);

//   useEffect(() => {
//     async function fetchPropostas() {
//       try {
//         const response = await fetch('http://localhost:3000/api/banda/propostas', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}` // Adapte conforme o token de autenticação
//           }
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setPropostas(data);
//         } else {
//           toast.error('Erro ao carregar propostas');
//         }
//       } catch (error) {
//         toast.error('Erro ao conectar com o servidor');
//       }
//     }

//     fetchPropostas();
//   }, []);

//   async function atualizarStatusProposta(id, status) {
//     try {
//       const response = await fetch(`http://localhost:3000/api/propostas/${id}/status`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({ status }),
//       });
  
//       if (response.ok) {
//         toast.success(`Proposta ${status}`);
//         // Atualize a lista de propostas aqui
//       } else {
//         toast.error('Erro ao atualizar a proposta');
//       }
//     } catch (error) {
//       toast.error('Erro ao conectar com o servidor');
//     }
//   }
  

//   return (
//     <>
//     <Sidebar />
//     <div className="p-8 pl-20">
//       <h2 className="text-2xl font-bold mb-4">Propostas Recebidas</h2>
//       {propostas.length === 0 ? (
//         <p>Nenhuma proposta recebida.</p>
//       ) : (
//         <ul>
//           {propostas.map((proposta) => (
//             <li key={proposta.id} className="mb-4 p-4 bg-white shadow rounded">
//             <h3 className="font-bold">{proposta.Estabelecimento.nome}</h3>
//             <p><strong>Data do Evento:</strong> {new Date(proposta.dataEvento).toLocaleDateString()}</p>
//             <p><strong>Mensagem:</strong> {proposta.mensagem}</p>
            
//             <div className="flex space-x-4 mt-4">
//               <button
//                 onClick={() => atualizarStatusProposta(proposta.id, 'aceita')}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Aceitar
//               </button>
//               <button
//                 onClick={() => atualizarStatusProposta(proposta.id, 'recusada')}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Recusar
//               </button>
//             </div>
//           </li>
          
//           ))}
//         </ul>
//       )}
//     </div>
//     </>
//   );
// }

// export default PropostasPage;
