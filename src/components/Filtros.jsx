import React from 'react';

function Filtros() {
  return (
    <>
     <div className="bg-white p-6 rounded-2xl shadow mb-8 flex items-center gap-4">

        <span className="text-gray-600">Filtros:</span>

        <select className="border rounded-lg p-2">
          <option>Mês</option>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>

        <select className="border rounded-lg p-2">
          <option>2025</option>
          <option>2026</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Filtrar
        </button>

        <button className="bg-gray-300 px-4 py-2 rounded-lg">
          Limpar
        </button>

      </div>

    </>
  );
}

export default Filtros;
