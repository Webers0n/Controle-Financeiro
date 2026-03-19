import React from 'react';

function Header() {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Dashboard Financeiro</h1>
          <p class="text-gray-500">Controle de gastos mensais</p>
        </div>

        <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow">
          <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40" />
          <div>
            <p class="font-medium">Weberson Oliveira</p>
            <p class="text-sm text-gray-500">tif2017c@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
