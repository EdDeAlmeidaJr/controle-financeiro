import { useEffect, useState } from 'react';

import Contas from '../interfaces/Contas';

const PosicaoAtual = () => {
  const [listaContas, setListaContas] = useState([]);

  const getListaContas = async (): Contas => {
    let conta = { id: 0, descricao: '', saldoImpl: '0.00' };
    let result: Contas = [conta];
    (async () => {
      await fetch('http://localhost:3000/data/contas.json')
        .then((res) => res.json())
        .then((json) => (result = json));
    })();
    return result;
  };

  useEffect(() => {
    (async () => {
      await getListaContas().then;
    })();
  });

  return (
    <div className="card">
      <div className="card-header">
        <h5>Posição atual</h5>
      </div>
      <div className="card-body">Lista de contas e respectivos saldos, com um total no final.</div>
    </div>
  );
};

export default PosicaoAtual;
