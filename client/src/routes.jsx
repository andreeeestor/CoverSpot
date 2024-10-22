import { Routes, Router, Route } from "react-router-dom"
import SuportePage from "./pages/suporte"

export default function AppRoutes(){
    return(
        <Routes>
            <Router>
                <Route path="/suporte" element={<SuportePage />} />

            </Router>
        </Routes>
        
    )
}