import { useState, useEffect } from "react";
import FinancialRecord from "../interfaces/RegistroFinanceiro";

const UltimosMovimentos = () => {
  const [movementsList, setMovementsList] = useState([]);

  const getUltimosMovimentos = () => {
    return fetch('')
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Conta</th>
          <th>Crédito</th>
          <th>Débito</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default UltimosMovimentos;