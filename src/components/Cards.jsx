import React from 'react';

function Cards({ Lista = [] }) {

  // parei aqui, tentando filtrar os valores total.
  //dos items adicioandos
  const Total = Lista.reduce((acc, item) => acc + Number(item.valor), 0);
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Mês Atual</p>
          <h2 className="text-2xl font-bold">R$ {Total}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Próximo Mês</p>
          <h2 className="text-2xl font-bold">R$ 980</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Parcelas</p>
          <h2 className="text-2xl font-bold">R$ 350</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Pago</p>
          <h2 className="text-2xl font-bold">R$ 3.800</h2>
        </div>
      </div>
    </>
  );
}

export default Cards;
