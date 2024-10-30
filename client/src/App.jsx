import { BrowserRouter, Routes, Route } from "react-router-dom"
import SuportePage from "./pages/suporte"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/notFound"
import FAQsPage from "./pages/faq"
import AutenticacaoPage from "./pages/autenticacao"
import CadastroCoverPage from "./pages/autenticacao/cadastroCover"
import LoginPage from "./pages/autenticacao/login"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/faqs" element={<FAQsPage />} />
                <Route path="/suporte" element={<SuportePage />} />
                <Route path="/autenticacao" element={<AutenticacaoPage />} />
                <Route path="/autenticacao/login" element={<LoginPage />} />
                <Route path="/autenticacao/cadastrocover" element={<CadastroCoverPage />} />
                {/* <Route path="/suporte/chatEstabelecimento" element={<SuportePage />} /> */}
            </Routes>
        </BrowserRouter>   
    )
}