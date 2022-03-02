import { useEffect, useState } from "react";

import formatAsMoney from "../utils/FormatAsMoney";

const PosicaoAtual = () => {

  const [contasList, setContasList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:3000/data/contas.json")
        .then(res => res.json())
      setContasList(result);
    })();
  }, [contasList])

  return (
    <div className="card">
      <div className="card-header">
        <h5>Posição atual</h5>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Conta</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {contasList.map((c) => (
              <tr>
                <td>{c.descricao}</td>
                <td className="right-aligned">{formatAsMoney(c.saldoImpl)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default PosicaoAtual;