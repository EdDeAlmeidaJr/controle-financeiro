import { useState, useEffect } from "react";

import UltimosMovimentosCabecalho from "./UltimosMovimentosCabecalho";

import dataInvertida from "../utils/DataInvertida";

const UltimosMovimentos = () => {
  const [movementsList, setMovementsList] = useState([]);
  const [accountsList, setAccountsList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('http://localhost:3000/data/contas.json')
        .then(res => res.json())
      setAccountsList(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await fetch('http://localhost:3000/data/ultimosmovimentos.json')
        .then(res => res.json())
        .then(json => json.map((j) => {
          j.conta = accountsList[j.id].descricao;
          return j;
        }))
      console.log(result);
      setMovementsList(result);
    })();
  }, [accountsList]);

  return (
    <div className="card">
      <div className="card-header">
        <h5>Últimos 20 movimentos</h5>
      </div>
      <div className="card-body">
        <table className="table">
          <UltimosMovimentosCabecalho />
          <tbody>
            {movementsList.map((mov) => (
              <tr key={mov.id}>
                <td>{dataInvertida(mov.ano, mov.mes, mov.dia)}</td>
                <td>{mov.conta}</td>
                <td>{mov.tipo}</td>
                <td>{mov.valor}</td>
                <td>{mov.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UltimosMovimentos;