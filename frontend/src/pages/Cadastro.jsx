import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    status: '',
    prazo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [erro, setErro] = useState('');

  const salvar = async () => {
  const { titulo, descricao, status, prazo } = form;

  if (!titulo || !descricao || !status || !prazo) {
    setErro("Preencha todos os campos!");
    return;
  }

  setErro('');

  await api.post('/tarefas', form);
  navigate('/tarefas');
    };
  
    return (    
    <div className="min-h-screen flex items-center justify-center p-6 
  bg-[radial-gradient(circle_at_center,_#ffffff,_#e9d5ff,_#c084fc)]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Botão voltar */}
        <button
          onClick={() => navigate('/')}
          className="text-purple-600 mb-4 hover:underline transition"
        >
          ⬅ Voltar
        </button>

        <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Nova Tarefa
        </h1>

        {erro && (
        <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {erro}
        </p>
        )}
        {/* Inputs */}
        <input
          name="titulo"
          placeholder="Título"
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          name="descricao"
          placeholder="Descrição"
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <select
            name="status"
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3 focus:ring-2 focus:ring-purple-500"
            >
            <option value="">Selecione o status</option>
            <option value="pendente">Pendente</option>
            <option value="iniciada">Iniciada</option>
            <option value="atrasada">Atrasada</option>
            
        </select>
        
        <input
          type="date"
          name="prazo"
          onChange={handleChange}
          className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Botão salvar */}
        <button
          onClick={salvar}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Salvar Tarefa
        </button>

      </div>
    </div>
  );
}

export default Cadastro;