import { HR } from "flowbite-react";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import HorizontalScrollCarousel from "../../components/HorizontalScrollCarousel";

export default function DestaquePage() {
  return (
    <>
    <section className="max-w-[1440px] mx-auto text-center pt-20">
        <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Destaque</h1>
        <h4 className="mt-6 text-lg/8 text-gray-600">
          Estabelecimentos que correspondem aos critérios definidos por você!
        </h4>
      </section>
      <HR.Trimmed />
      <HorizontalScrollCarousel />
    <Footer />
    </>
  );
}
