import { BrowserRouter, Routes, Route } from "react-router-dom"
import SuportePage from "./pages/suporte"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/notFound"
import FAQsPage from "./pages/faq"
import AutenticacaoPage from "./pages/autenticacao"
import CadastroCoverPage from "./pages/autenticacao/cadastroCover"
import LoginPage from "./pages/autenticacao/login"
import CadastroEstabelecimentoPage from "./pages/autenticacao/cadastroEstabelecimento"
import DestaquePage from "./pages/destaque"
import DashboardEstabelecimentoPage from "./pages/dashboardEstabelecimento"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/faqs" element={<FAQsPage />} />
                <Route path="/suporte" element={<SuportePage />} />
                <Route path="/destaque" element={<DestaquePage />} />
                <Route path="/autenticacao" element={<AutenticacaoPage />} />
                <Route path="/autenticacao/login" element={<LoginPage />} />
                <Route path="/autenticacao/cadastrocover" element={<CadastroCoverPage />} />
                <Route path="/autenticacao/cadastroestabelecimento" element={<CadastroEstabelecimentoPage />} />
                <Route path="/dashboard-estabelecimento" element={<DashboardEstabelecimentoPage />} />
                {/* <Route path="/suporte/chatEstabelecimento" element={<SuportePage />} /> */}
            </Routes>
        </BrowserRouter>   
    )
}