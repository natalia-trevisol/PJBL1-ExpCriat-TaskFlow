import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-600 text-white">

      <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>

      <p className="text-lg mb-8">
        Sistema de Gestão de Tarefas
      </p>

      <div className="flex gap-4">
        <Link to="/tarefas">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Ver Tarefas
          </button>
        </Link>

        <Link to="/nova">
          <button className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-purple-600 transition">
            Nova Tarefa
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Home;