import Sidebar from "../../../components/Sidebar";
import { InputBase, InputPassword } from "../../../components/Inputs";
import ImageLogin from "../../../assets/img01.png";
import { MicrophoneStage } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import loadingsvg from "../../../assets/LoadingSVG.svg";
import {Modal} from "flowbite-react"
import Button from "../../../components/Button"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(true)

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3000/bandas/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        toast.success("Login bem-sucedido!");
        setLoading(false)
      } else {
        toast.error("Credenciais inválidas");
        setLoading(false)
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao conectar com o servidor.");
      setLoading(false)
    }
  }

  return (
    <>
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
    <Modal.Header>Redefinição de senha</Modal.Header >
    <Modal.Body className="space-y-6">
      <h6 className="font-medium text-gray-400">Informe seu email registrado que te enviaremos um link para recuperação da senha</h6>
      <InputBase type={"email"} />
      <Button className={"w-full flex justify-center"} text={"ENVIAR"} />
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-6 relative">
                  <InputPassword
                    label="Senha"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    Esqueceu sua senha?
                    <a href="#" className="text-gray-700 underline ml-2">
                      Clique para redefinir
                    </a>
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
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
