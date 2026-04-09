import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listagem from './pages/Listagem';
import Cadastro from './pages/Cadastro';
import Detalhes from './pages/Detalhes';
import { useState, useEffect } from 'react';

function App() {

  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<Listagem />} />
            <Route path="/nova" element={<Cadastro />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>

        <footer className="text-center p-4 text-sm text-gray-500">
            Desenvolvido por Natalia Trevisol
        </footer>
        </BrowserRouter>
    
  );
}

export default App;