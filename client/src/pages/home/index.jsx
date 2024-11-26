import Sidebar from "../../components/Sidebar";
import { SwipeCarousel } from "../../components/SwipeCarousel";
import MainContainer from "../../components/MainContainer";
import {
  AddressBook,
  Target,
  Eye,
  HandHeart,
} from "@phosphor-icons/react";
import Footer from "../../components/Footer";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  const features = [
    {
      name: "Quem Somos",
      description: (
        <>
          <p>
            Nossa equipe é composta por uma mistura diversificada de
            profissionais criativos, desenvolvedores de software e entusiastas
            da música, todos unidos pela mesma visão de promover e apoiar a
            comunidade artística.
          </p>
          <p className="mt-2">
            Estamos comprometidos em fornecer uma experiência excepcional tanto
            para artistas quanto para proprietários de locais. Acreditamos que a
            música ao vivo é uma parte fundamental da cultural.
          </p>
        </>
      ),
      icon: AddressBook,
    },
    {
      name: "Nossa Visão",
      description: (
        <ul className="list-disc">
          <li>
            Criar uma plataforma global que simplifique a descoberta e a reserva
            de performances musicais ao vivo.
          </li>
          <li>Tornar a música ao vivo acessível e emocionante para todos.</li>
        </ul>
      ),
      icon: Eye,
    },
    {
      name: "Nossa Missão",
      description: (
        <ul className="list-disc">
          <li>
            Conectar artistas talentosos com locais de entretenimento vibrantes.
          </li>
          <li>Promover a música ao vivo como parte fundamental da cultural.</li>
        </ul>
      ),
      icon: Target,
    },
    {
      name: "Nossos Valores",
      description: (
        <ul className="list-disc">
          <li>Dedicação à comunidade artística.</li>
          <li>Excelência em experiência do usuário.</li>
          <li>Inovação e criatividade em tudo o que fazemos.</li>
        </ul>
      ),
      icon: HandHeart,
    },
  ];

  const renderFeatures = () => {
    return features.map((feature) => (
      <div key={feature.name} className="relative pl-16">
        <dt className="text-base/7 font-semibold text-gray-900">
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#18A0FB]">
            <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
          </div>
          {feature.name}
        </dt>
        <dd className="mt-2 text-base/7 text-gray-600">
          {feature.description}
        </dd>
      </div>
    ));
  };

  return (
    <>
      <Sidebar />
      <section className="pl-14">
        <SwipeCarousel />
      </section>
      <MainContainer>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-[#18A0FB]">
                Sobre a CoverSpot
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Transformando a Música ao Vivo em Conexões Inesquecíveis
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Na CoverSpot, somos apaixonados por conectar artistas talentosos
                com locais de entretenimento vibrantes. Nosso objetivo é criar
                uma plataforma inovadora que facilite a descoberta e a reserva
                de performances musicais ao vivo em bares, pubs e outros espaços
                de entretenimento.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {renderFeatures()}
              </dl>
            </div>
          </div>
        </div>

        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center 2xl:rounded-lg">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Conecte sua banda ao palco certo!
      </h2>

      <p className="text-gray-500 md:mt-4">
        Apresente seu talento e encontre oportunidades de se apresentar em estabelecimentos incríveis.  
        Ou, se você é um estabelecimento, descubra bandas covers excepcionais para animar o seu evento.  
        A CoverSpot facilita a conexão entre artistas e palcos.
      </p>
    </div>
  </div>

  <img
    alt="Banda se apresentando"
    src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>


        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-5xl text-4xl lg:text-balance font-semibold text-pretty mb-6 tracking-tight text-gray-900">
                Nossa Equipe
              </h1>
              <ul className="lg:w-2/3 mx-auto leading-relaxed text-base text-start">
                <li className="list-disc">
                  Uma mistura diversificada de profissionais criativos,
                  desenvolvedores de software e entusiastas da música.
                </li>
                <li className="list-disc">
                  Comprometidos em fornecer uma experiência excepcional tanto
                  para artistas quanto para proprietários de locais.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <UserCircle weight="duotone" className="w-16 h-16 mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Marcelo Debarry
                    </h2>
                    <p className="text-gray-500">Tech Lead</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <UserCircle weight="duotone" className="w-16 h-16 mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Murilo Rezende
                    </h2>
                    <p className="text-gray-500">Back-End</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <UserCircle weight="duotone" className="w-16 h-16 mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Gustavo Henrique
                    </h2>
                    <p className="text-gray-500">Front-End</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <UserCircle weight="duotone" className="w-16 h-16 mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Davi Vital
                    </h2>
                    <p className="text-gray-500">Figma</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <UserCircle weight="duotone" className="w-16 h-16 mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Isaac
                    </h2>
                    <p className="text-gray-500">Banco de Dados</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <UserCircle weight="duotone" className="w-16 h-16 mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Arthur Botelho
                    </h2>
                    <p className="text-gray-500">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="p-4">
          <div className="rounded-lg bg-[#18a0fb] p-6 text-white shadow-lg">
            <p className="text-center text-xl font-medium text-pretty italic">
              "Do palco para o coração: experiências musicais que ficam para
              sempre."
            </p>
          </div>
        </div>
      </MainContainer>
      <footer className="my-12">
        <Footer />
      </footer>
    </>
  );
}
