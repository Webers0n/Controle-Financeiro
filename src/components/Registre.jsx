import React from 'react';
import { useState } from 'react';
import Tabela from './Tabela';
import Input from './Input';
import Cards from './Cards';

function Registre() {
  const [form, setForm] = useState({ nome: '', valor: '', parcelas: '' });
  let [lista, setLista] = useState([]);

  const Captura = () => {
    setLista([...lista, form]);

    setForm({
      nome: '',
      valor: Number(''),
      parcelas: '',
    });
  };

  return (
    <>
      <Cards Lista={lista} />
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <div className="grid grid-cols-5 gap-4">
          <Input
            value={form.nome}
            onChange={(e) => {
              setForm({ ...form, nome: e.target.value });
            }}
            placeholder={'Produto'}
          />

          <Input
            value={form.valor}
            onChange={(e) => {
              setForm({ ...form, valor: e.target.value });
            }}
            placeholder={'Valor'}
          />

          <Input
            value={form.parcelas}
            onChange={(e) => {
              setForm({ ...form, parcelas: e.target.value });
            }}
            placeholder={'Parcelas'}
          />

          <input
            type="date"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={Captura}
          >
            Registrar Compra
          </button>
        </div>
      </div>
      <Tabela Lista={lista} />
    </>
  );
}

export default Registre;
