import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Guitar, Phone, Envelope, Calendar, MapPin, Star, WhatsappLogo } from '@phosphor-icons/react';
import Sidebar from '../../components/Sidebar';
import ModalProposta from '../../components/ModalPropostas';

const ListaBandasPage = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedBanda, setSelectedBanda] = useState(null);
  const navigate = useNavigate();

  const openModal = (bandaId) => {
    setSelectedBanda(bandaId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBanda(null);
  };

  useEffect(() => {
    const fetchBands = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bandas-cover');
        setBands(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar bandas:', error);
        setLoading(false);
      }
    };

    fetchBands();
  }, []);

  const formatPhoneForWhatsApp = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length === 9) {
      return `5531${cleanPhone}`;
    }
    return `55${cleanPhone}`;
  };

  const genres = ['all', ...new Set(bands.map(band => band.generoMusical))];

  const filteredBands = selectedGenre === 'all' 
    ? bands 
    : bands.filter(band => band.generoMusical === selectedGenre);

    const handleSendProposal = (band) => {
        const token = localStorage.getItem('token');
        if (!token) {
          alert("É necessário estar logado como ESTABELECIMENTO.")
          navigate('/autenticacao/login');
          return;
        }
    
        const message = encodeURIComponent(
          `Olá! Vi seu perfil no CoverSpot e gostaria de fazer uma proposta para um show. Podemos conversar?`
        );
        
        const phoneNumber = formatPhoneForWhatsApp(band.telefone);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
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
    <Sidebar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bandas Cover Disponíveis
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Encontre a banda perfeita para seu evento
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedGenre === genre
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
            >
              {genre === 'all' ? 'Todos os Gêneros' : genre}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBands.map((band) => (
          <div
            key={band.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white">{band.nomeCover}</h3>
              <p className="text-blue-100">{band.generoMusical}</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Guitar className="w-5 h-5 mr-2" />
                  <span>Banda Cover de {band.generoMusical}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{band.telefone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Envelope className="w-5 h-5 mr-2" />
                  <span>{band.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{band.disponibilidade}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Sobre a Banda</h4>
                <p className="text-gray-600 line-clamp-3">{band.biografia}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Portfólio</h4>
                <p className="text-gray-600 line-clamp-2">{band.portfolio}</p>
              </div>

              <button
                onClick={() => openModal(band.id)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium
                  hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                Enviar Proposta
              </button>
              <button
              onClick={() => handleSendProposal(band)}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium
                  hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <WhatsappLogo weight="fill" className="w-5 h-5" />
                Enviar Proposta via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ModalProposta bandaId={selectedBanda} onClose={closeModal} />
      )}

      {filteredBands.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            Nenhuma banda encontrada para o gênero selecionado.
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default ListaBandasPage;