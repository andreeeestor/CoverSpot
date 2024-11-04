import VerticalAccordion from "../../components/Accordion";
import FAQs from "../../components/FAQs";
import MainContainer from "../../components/MainContainer";
import Sidebar from "../../components/Sidebar";
import { Accordion, HR } from "flowbite-react";

export default function FAQsPage() {
  return (
    <>
        <Sidebar />
        <MainContainer className={`pt-10`}>
        <div class="space-y-6">
            <h1 className="text-center text-4xl font-bold">Dúvidas Frequentes</h1>
            <HR.Trimmed />
          <FAQs title={"Como posso alterar minha senha?"} />
          <FAQs title={"Como personalizar a página do artista?"} />
          <FAQs title={"Por que meu cover está em análise?"} />
          <FAQs title={"Quais são minhas formas de pagamento?"} />
        </div>
        </MainContainer>
    </>
  );
}
