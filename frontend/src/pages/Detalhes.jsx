import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
    api.get(`/tarefas/${id}`).then(res => setTarefa(res.data));
  }, []);

  const deletar = async () => {
    if (!confirm("Deseja excluir?")) return;

    await api.delete(`/tarefas/${id}`);
    alert("Excluído!");
    navigate('/tarefas');
  };

  const [erro, setErro] = useState('');
  const [confirmar, setConfirmar] = useState(false);

  const editar = async () => {
  const { titulo, descricao, status, prazo } = tarefa;

  if (!titulo || !descricao || !status || !prazo) {
    setErro("Preencha todos os campos!");
    return;
  }

  setErro('');

  const prazoFormatado = new Date(prazo).toISOString().split('T')[0];

    await api.put(`/tarefas/${id}`, {
        titulo,
        descricao,
        status,
        prazo: prazoFormatado
    });

    navigate('/tarefas');
    };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-[radial-gradient(circle_at_center,_#ffffff,_#e9d5ff,_#c084fc)] p-6">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        {/* Botão voltar */}
        <button
          onClick={() => navigate('/tarefas')}
          className="text-purple-700 mb-4 hover:underline"
        >
          ⬅ Voltar
        </button>

        {/* Título */}
        <h1 className="text-2xl font-bold text-purple-800 text-center mb-6">
          Detalhes da Tarefa
        </h1>

        {erro && (
            <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
                {erro}
            </p>
        )}
        
        {/* Inputs */}
        <input
          value={tarefa.titulo || ''}
          onChange={e => setTarefa({ ...tarefa, titulo: e.target.value })}
          className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Título"
        />

        <input
          value={tarefa.descricao || ''}
          onChange={e => setTarefa({ ...tarefa, descricao: e.target.value })}
          className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Descrição"
        />

        <select
            value={tarefa.status || ''}
            onChange={e => setTarefa({ ...tarefa, status: e.target.value })}
            className="border p-2 rounded w-full mb-3 focus:ring-2 focus:ring-purple-500"
            >
            <option value="">Selecione o status</option>
            <option value="pendente">Pendente</option>
            <option value="iniciada">Iniciada</option>
            <option value="atrasada">Atrasada</option>
        </select>

        <input
          type="date"
          value={tarefa.prazo ? tarefa.prazo.split('T')[0] : ''}
          onChange={e => setTarefa({ ...tarefa, prazo: e.target.value })}
          className="border p-2 rounded w-full mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Botões */}
        <div className="flex justify-between gap-2">

          <button
            onClick={editar}
            className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Salvar
          </button>

          <button
            onClick={() => setConfirmar(true)}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Excluir
          </button>

        </div>
        {confirmar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">

            <p className="mb-4 font-semibold">
                Deseja realmente excluir esta tarefa?
            </p>

            <div className="flex gap-4 justify-center">
                <button
                onClick={deletar}
                className="bg-red-500 text-white px-4 py-2 rounded"
                >
                Sim
                </button>

                <button
                onClick={() => setConfirmar(false)}
                className="bg-gray-300 px-4 py-2 rounded"
                >
                Cancelar
                </button>
            </div>

            </div>
        </div>
        )}
      </div>
    </div>
  );
  
}

export default Detalhes;