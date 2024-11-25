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
                Lorem, ipsum dolor sit amet
              </h2>

              <p className="text-gray-500 md:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>
            </div>
          </div>

          <img
            alt=""
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
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p className="text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/84x84"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Henry Letham
                    </h2>
                    <p className="text-gray-500">CTO</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/88x88"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Oskar Blinde
                    </h2>
                    <p className="text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/90x90"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      John Doe
                    </h2>
                    <p className="text-gray-500">DevOps</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/94x94"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Martin Eden
                    </h2>
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/98x98"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Boris Kitua
                    </h2>
                    <p className="text-gray-500">UX Researcher</p>
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
