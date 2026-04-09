import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function Listagem() {
  const [tarefas, setTarefas] = useState([]);

  const getStatusColor = (status) => {
  switch (status) {
    case 'iniciada':
      return 'text-green-600';
    case 'pendente':
      return 'text-yellow-600';
    case 'atrasada':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
  };
  
  useEffect(() => {
    api.get('/tarefas').then(res => setTarefas(res.data));
  }, []);

  return (
    
    <div className="min-h-screen p-6 
      bg-[radial-gradient(circle_at_center,_#ffffff,_#e9d5ff,_#c084fc)]">

      {/* Botão voltar */}
      <Link to="/">
        <button className="mb-8 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition hover:scale-105">          
            Voltar
        </button>
      </Link>

    
      {/* Título centralizado */}
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-2">
        Minhas Tarefas
      </h1>

      {/* Subtítulo em negrito */}
      <p className="text-center font-semibold text-gray-700 mb-8">
        Clique na tarefa para editar, excluir ou visualizar detalhes.
      </p>

      {/* Botão nova tarefa centralizado */}
      <div className="flex justify-center">
        <Link to="/nova">
          <button className="mb-8 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition hover:scale-105">
            + Nova Tarefa
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {tarefas.map(t => (
          <Link to={`/detalhes/${t.id}`} key={t.id}>
            <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer">

              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                {t.titulo}
              </h2>

              <p className="text-gray-600 mb-2">
                {t.descricao}
              </p>

              <p className={`mt-2 font-medium ${getStatusColor(t.status)}`}>
                Status: {t.status}
              </p>

              <p className="text-sm text-gray-500">
                {new Date(t.prazo).toLocaleDateString()}
              </p>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Listagem;