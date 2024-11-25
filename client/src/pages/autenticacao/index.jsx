import { BuildingOffice, MicrophoneStage, SignIn } from "@phosphor-icons/react";
import MainContainer from "../../components/MainContainer";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { HR } from "flowbite-react"

export default function AutenticacaoPage() {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <section className="flex flex-col justify-center items-center 2xl:px-0 p-6 w-full">
          <h1 className="text-3xl font-semibold">Como deseja se registrar?</h1>
          <HR.Trimmed />
          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-md transition hover:shadow-lg sm:p-6 w-full mb-8">
            <span className="inline-block rounded bg-blue-600 p-2 text-white">
              <MicrophoneStage weight="fill" size={24} />
            </span>

              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                Cover Artístico
              </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Descubra novos talentos, agende performances ao vivo e conecte-se com locais de entretenimento em todo o mundo na CoverSpot.
            </p>

            <Link
              to="/autenticacao/cadastrocover"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all hover:border-b-[1px] hover:border-blue-600"
            >
              Registrar como Cover Artístico
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </article>

          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-md transition hover:shadow-lg sm:p-6 w-full mb-8">
            <span className="inline-block rounded bg-blue-600 p-2 text-white">
              <BuildingOffice weight="fill" size={24} />
            </span>

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              Estabelecimento
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Cadastrar como estabelecimento no CoverSpot é uma maneira simples
              e eficaz para os proprietários de locais de entretenimento se
              conectarem com artistas e promoverem eventos musicais ao vivo em suas instalações.
            </p>

            <Link
              to="/autenticacao/cadastroestabelecimento"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all hover:border-b-[1px] hover:border-blue-600"
            >
              Registrar como Estabelecimento
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </article>
          <HR.Trimmed />
          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-md transition hover:shadow-lg sm:p-6 w-full">
            <span className="inline-block rounded bg-blue-600 p-2 text-white">
             <SignIn weight="fill" size={24} />
            </span>

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              Login
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Caso já tenha uma conta seja de Cover Artístico ou como Estabelecimento, continue sua conexão com a CoverSpot!
            </p>

            <Link
              to="/autenticacao/login"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all hover:border-b-[1px] hover:border-blue-600"
            >
              Fazer Login como Cover Artístico ou Estabelecimento
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </article>
        </section>
      </MainContainer>
    </>
  );
}
