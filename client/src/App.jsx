import { BrowserRouter, Routes, Route } from "react-router-dom"
import SuportePage from "./pages/suporte"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/notFound"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/suporte" element={<SuportePage />} />
            </Routes>
        </BrowserRouter>   
    )
}