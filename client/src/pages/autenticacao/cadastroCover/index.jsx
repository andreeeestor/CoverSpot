import { useState } from "react";
import { MicrophoneStage } from "@phosphor-icons/react";
import Sidebar from "../../../components/Sidebar";
import { InputBase, InputPassword } from "../../../components/Inputs";
import ImageLogin from "../../../assets/Cover.jpg";
import { Link } from "react-router-dom";
import loadingsvg from "../../../assets/LoadingSVG.svg";
import { Toaster, toast } from "sonner";

export default function CadastroCoverPage() {
  const [formData, setFormData] = useState({
    nomeCover: "",
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    generoMusical: "",
    biografia: "",
    portfolio: "",
    disponibilidade: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      const phoneValue = value.replace(/\D/g, "");
      if (phoneValue.length > 11) return; 
    }
    setFormData({ ...formData, [name]: value });
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 11 && cleanPhone.length !== 9) {
      return false;
    }

    if (cleanPhone.length === 11 && cleanPhone.substring(2, 3) !== "9") {
      return false;
    }
    if (cleanPhone.length === 9 && cleanPhone.substring(0, 1) !== "9") {
      return false;
    }

    return true;
  };

  const formatPhoneForWhatsApp = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length === 9) {
      return `5511${cleanPhone}`;
    }
    return `55${cleanPhone}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.telefone)) {
      toast.error("Por favor, insira um número de celular válido com DDD");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/bandas-cover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          telefone: formData.telefone.replace(/\D/g, ""),
        }),
      });

      if (response.ok) {
        toast.success("Cadastro realizado com sucesso!");
        console.log(response);
        setLoading(false);
      } else {
        const errorData = await response.json();
        toast.error(`Erro: ${errorData.error}`);
        setLoading(false);
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Erro ao conectar com o servidor.");
      setLoading(false);
    }
  };

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
      <Sidebar active />
      <section className="bg-white pl-10">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              src={ImageLogin}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <MicrophoneStage size={40} weight="fill" />
              </a>
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Cadastre-se no CoverSpot
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Preencha o formulário abaixo para criar sua conta como Cover
                artístico na CoverSpot:
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <InputBase
                    label="Nome"
                    type="text"
                    name="nomeCover"
                    value={formData.nomeCover}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase
                    label="Sobrenome"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase
                    label="Celular"
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 relative">
                  <InputPassword
                    label="Senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <InputBase
                    label="Gênero Musical"
                    type="text"
                    name="generoMusical"
                    value={formData.generoMusical}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase
                    label="Biografia"
                    type="text"
                    name="biografia"
                    value={formData.biografia}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase
                    label="Portfolio"
                    type="text"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <InputBase
                    label="Disponibilidade"
                    type="text"
                    name="disponibilidade"
                    value={formData.disponibilidade}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    {loading ? <img src={loadingsvg} /> : "Registrar"}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Já tem uma conta?
                    <Link
                      to="/autenticacao/login"
                      className="text-gray-700 underline pl-2"
                    >
                      Faça o Login
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
