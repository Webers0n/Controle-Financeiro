import React from 'react';

function Tabela({ Lista = [] }) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Registros</h2>
        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2">Produto</th>
              <th>Valor</th>
              <th>Parcelas</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {Lista.map(({ nome, valor, parcelas }, index) => {
              return (
                <tr key={index} className="border-b">
                  <td>{nome}</td>
                  <td>R$ {valor}</td>
                  <td>{parcelas}x</td>
                  <td>-</td>
                  <button
                    className={'st'}
                    onClick={() => {
                      const bt = document.getElementsByClassName('#st').valor
                      
                    }}
                  >
                    Pagar
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabela;
