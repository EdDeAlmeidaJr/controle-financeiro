import React from 'react';

import {
  Link
} from 'react-router-dom';

const Cabecalho = () => (
  <div className="container-fluid app-header">
    <div className="row align-items-center">
      <div className="col-6 app-title">
        Controle Financeiro Familiar
      </div>
      <div className="col-6 app-menu">
        <div className="col-3 app-menu-item">
          <Link to="/">Homepage</Link>
        </div>
        <div className="col-3 app-menu-item">
          <Link to="/orcamento">Orçamento</Link>
        </div>
        <div className="col-3 app-menu-item">
          <Link to="/movimento">Movimentação</Link>
        </div>
        <div className="col-3 app-menu-item">
          <Link to="/balanco">Balanço</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Cabecalho;