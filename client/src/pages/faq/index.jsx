import FAQs from "../../components/FAQs";
import MainContainer from "../../components/MainContainer";
import Sidebar from "../../components/Sidebar";
import { HR } from "flowbite-react";

export default function FAQsPage() {
  return (
    <>
      <Sidebar />
      <MainContainer className={`pt-10`}>
        <div className="space-y-6">
          <h1 className="text-center text-4xl font-bold">Dúvidas Frequentes</h1>
          <HR.Trimmed />

          <FAQs
            title="Como faço para me cadastrar como banda cover ou estabelecimento?"
            content={
              "Para se cadastrar:\n\n- Bandas Cover: Acesse a página de cadastro e preencha o formulário com informações como nome, gênero musical, biografia e portfólio.\n\n- Estabelecimentos: Acesse a página de cadastro e forneça informações como CNPJ, endereço, capacidade e horário de funcionamento."
            }
          />

          <FAQs
            title="Como funcionam as propostas entre estabelecimentos e bandas?"
            content={
              "Os estabelecimentos podem visualizar perfis de bandas cover e enviar propostas para apresentações. Ao receber uma proposta, a banda pode aceitar ou recusar. Se aceita, ambas as partes são notificadas, e os detalhes do evento são confirmados."
            }
          />

          <FAQs
            title="Como posso entrar em contato com uma banda ou estabelecimento?"
            content={
              "Na página de perfil das bandas ou estabelecimentos, você encontrará informações de contato, como e-mail e telefone. Além disso, os estabelecimentos podem enviar mensagens diretamente via WhatsApp usando a funcionalidade integrada na plataforma."
            }
          />

          <FAQs
            title="É possível visualizar o histórico de propostas enviadas ou recebidas?"
            content={
              "Sim. Tanto bandas quanto estabelecimentos têm acesso a um histórico de propostas. Nele, você pode verificar o status das propostas (pendente, aceita ou recusada) e acompanhar os detalhes de cada solicitação enviada ou recebida."
            }
          />
        </div>
      </MainContainer>
    </>
  );
}
