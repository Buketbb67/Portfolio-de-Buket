import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 
import Main from "./pages/Main.jsx";
import Competencestechniques from "./pages/comptech.jsx";
import Projet from "./pages/projets.jsx";
import Aproposdemoi from "./pages/aproposdemoi.jsx";
import Contact from "./pages/contact.jsx";
import Cancersein from "./pages/cancersein.jsx";
import Mario from "./pages/mariobros.jsx";
import Jourdepassement from "./pages/jourdepassement.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/competencestechniques" element={<Competencestechniques/>}/>
                <Route path="/projets" element={<Projet/>}/>
                    <Route path="/mariobros" element={<Mario/>}/>
                    <Route path="/cancersein" element={<Cancersein/>}/>
                    <Route path="/jourdepassement" element={<Jourdepassement/>}/>
                <Route path="/aproposdemoi" element={<Aproposdemoi/>}/>
                <Route path="/contact" element={<Contact/>}/>

            </Routes>
        </Router>
    );
}
export default App; 