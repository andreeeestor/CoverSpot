import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import {
  Calendar,
  Clock,
  MapPin,
  MusicNotes,
} from "@phosphor-icons/react";
import Sidebar from "../../components/Sidebar";

export default function ComunidadePage() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function fetchEventos() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/eventos-confirmados",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data); // Verifique os dados aqui
          setEventos(data);
        } else {
          toast.error("Erro ao carregar eventos.");
        }
      } catch (error) {
        toast.error("Erro ao conectar com o servidor.");
      }
    }

    fetchEventos();
  }, []);

  return (
    <>
      <Toaster
        expand
        position="top-center"
        richColors
        toastOptions={{
          style: {
            margin: "10px",
            padding: "15px",
            maxWidth: "400px",
            borderRadius: "8px",
            gap: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-8 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Eventos Confirmados
            </h2>

            {eventos.length === 0 ? (
              <p className="text-center text-gray-500">
                Nenhum evento confirmado no momento.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventos.map((evento) => (
                  <div
                    key={evento.id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {evento.BandaCover?.nomeCover ||
                        `Banda ${evento.id}`}
                    </h3>
                    <div className="text-gray-600 space-y-2">
                      {/* <div className="flex items-center gap-2">
                        <MusicNotes className="w-5 h-5 text-blue-500" />
                        <span>
                          {evento.BandaCover?.generoMusical ||
                            "Gênero Indisponível"}
                        </span>
                      </div> */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <span>
                          {evento.Estabelecimento?.endereco ||
                            "Endereço Indisponível"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span>
                          {new Date(evento.dataEvento).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span>{`${evento.horaInicio || "00:00"} - ${
                          evento.horaFim || "00:00"
                        }`}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
