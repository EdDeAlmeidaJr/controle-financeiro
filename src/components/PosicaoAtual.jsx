import { useEffect, useState } from "react";

const PosicaoAtual = () => {
  const [listaContas, setListaContas] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/data/contas.json")
        .then((res) => res.json())
        .then((json) => setListaContas(json));
    })();
  });

  return (
    <div>
      {listaContas.map((conta) => {
        <tr key={conta.id}>
          <td>{conta.descricao}</td>
          <td>{conta.saldoImpl}</td>
        </tr>;
      })}
    </div>
  );
};

export default PosicaoAtual;
