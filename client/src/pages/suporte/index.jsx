import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import MainContainer from "../../components/MainContainer";
import { FloatingLabel } from "flowbite-react";
import Button from "../../components/Button";
import {
  Medal,
  PaperPlaneTilt,
  SealQuestion,
  UsersFour,
} from "@phosphor-icons/react";

export default function SuportePage() {
  return (
    <>
      <Sidebar />
      <MainContainer>
        {/* <main className="grid place-items-center h-screen"> */}
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold sm:text-3xl">
              Central de Ajuda
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Como podemos ajudar?
            </p>

            <form
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >

              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:border-[#18A0FB]"
                    placeholder="Digite aqui o que você procura:"
                  />

                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:border-[#18A0FB]"
                    placeholder="E-mail ou nome de usuário:"
                  />

                </div>
              </div>

              <Button icon={<PaperPlaneTilt weight="fill" />} text={"ENVIAR"} className={"w-full text-center flex items-center justify-center"} />
            </form>
          </div>
        </div>
        {/* </main> */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-24 pt-4 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0">
                  <SealQuestion size={40} color="#18A0FB" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Envie uma mensagem
                  </h2>
                  <p className="leading-relaxed text-base">
                    Não encontrou o que precisava na nossa Central de Ajuda?
                    Você também pode enviar sua dúvida <span className="font-semibold text-sky-600 cursor-pointer transition-all hover:underline hover:opacity-85">clicando aqui</span>.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0">
                  <UsersFour size={40} color="#18A0FB" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Consultores
                  </h2>
                  <p className="leading-relaxed text-base">
                    Ainda não conhece nossa plataforma e quer entender por que
                    temos a melhor solução para o seu evento? Fale com um de
                    nossos consultores <span className="font-semibold text-sky-600 cursor-pointer transition-all hover:underline hover:opacity-85">clicando aqui</span>, Vamos entrar em contato
                    com você!
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0">
                  <Medal size={40} color="#18A0FB" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Imprensa
                  </h2>
                  <p className="leading-relaxed text-base">
                    Você faz parte de algum veículo da imprensa e gostaria de
                    mais informações sobre a CoverSpot? Reunimos tudo o que
                    precisa, materiais para download e e-mail de contato aqui :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
}
