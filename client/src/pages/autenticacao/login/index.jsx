import Sidebar from "../../../components/Sidebar";
import { InputBase, InputPassword } from "../../../components/Inputs";
import ImageLogin from "../../../assets/img01.png";
import { MicrophoneStage } from "@phosphor-icons/react/dist/ssr";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import loadingsvg from "../../../assets/LoadingSVG.svg";
import { HR, Modal } from "flowbite-react";
import Button from "../../../components/Button";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [resetEmail, setResetEmail] = useState(""); 
  const navigate = useNavigate();

  function onCloseModal() {
    setOpenModal(false);
    setResetEmail(""); 
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", data.tipo);

        toast.success("Login realizado com sucesso!");

        if (data.tipo === "estabelecimento") {
          navigate("/perfil-estabelecimento");
        } else {
          navigate("/perfil");
        }
      } else {
        toast.error(data.error || "Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResetRequest(event) {
    event.preventDefault();
    
    if (!resetEmail) {
      toast.error("Por favor, informe um email");
      return;
    }
    
    setLoading(true);

    try {
      console.log('Sending reset request for email:', resetEmail);
      
      const response = await fetch('http://localhost:3000/api/auth/request-reset', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email: resetEmail })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success('Email de redefinição enviado com sucesso!');
        onCloseModal();
      } else {
        toast.error(data.error || 'Erro ao enviar email de redefinição');
      }
    } catch (error) {
      console.error('Erro detalhado:', error);
      toast.error(`Erro ao conectar com o servidor: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className="px-6 pt-6 text-pretty font-semibold tracking-tight text-gray-900 lg:text-balance">
          Redefinição de senha
        </Modal.Header>
        <div className="w-5/6 h-px" />
        <Modal.Body className="pt-3">
          <form className="space-y-6" onSubmit={handleResetRequest}>
            <InputBase
              type="email"
              label="Informe seu EMAIL registrado que te enviaremos um link para recuperação da senha:"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
            <Button
              className="w-full flex justify-center"
              text={loading ? "ENVIANDO..." : "ENVIAR"}
              icon={<PaperPlaneTilt weight="fill" />}
              disabled={loading}
              type="submit"
            />
          </form>
        </Modal.Body>
      </Modal>

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
                Login na CoverSpot
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Bem-vindo de volta à CoverSpot!
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <InputBase
                    label="Email"
                    type="email"
                    name="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="col-span-6 relative">
                  <InputPassword
                    label="Senha"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    Esqueceu sua senha?
                    <span
                      onClick={() => setOpenModal(true)}
                      className="text-gray-700 underline ml-2 cursor-pointer"
                    >
                      Clique para redefinir
                    </span>
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    disabled={loading}
                  >
                    {loading ? <img src={loadingsvg} /> : "Entrar"}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Ainda não tem uma conta?
                    <Link
                      to="/autenticacao/cadastrocover"
                      className="text-gray-700 underline pl-2"
                    >
                      Cadastre-se
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