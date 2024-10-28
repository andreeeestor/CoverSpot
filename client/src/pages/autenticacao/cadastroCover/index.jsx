import { MicrophoneStage } from "@phosphor-icons/react";
import Sidebar from "../../../components/Sidebar";
import { InputBase, InputPassword } from "../../../components/Inputs";
import ImageLogin from "../../../assets/Cover.jpg";

export default function CadastroCoverPage() {
  return (
    <>
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

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <InputBase label={"Nome"} type={"text"} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase label={"Sobrenome"} type={"text"} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase label={"Email"} type={"email"} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase label={"Celular"} type={"number"} />
                </div>

                <div className="col-span-6 relative">
                  <InputPassword label={"Senha"} />
                </div>

                <div className="col-span-6">
                  <InputBase label={"Gênero Musical"} type={"text"} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="col-span-6 relative">
                    <InputBase label={"Biografia"} type={"text"} />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <InputBase label={"Portfolio"} type={"text"} />
                </div>

                <div className="col-span-6 relative">
                  <InputBase label={"Disponibilidade"} type={"text"} />
                </div>

                <div className="col-span-6 relative">
                  <InputBase label={"Área de atuação"} type={"text"} />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Registrar
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Já tem uma conta?
                    <a href="#" className="text-gray-700 underline pl-2">
                      Faça o Login
                    </a>
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
