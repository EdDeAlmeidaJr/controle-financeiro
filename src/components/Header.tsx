import {
  Link
} from 'react-router-dom';

const Header = () => (
  <div className="container-fluid app-header">
    <div className="row align-items-center">
      <div className="col-6 app-title">
        Controle Financeiro Familiar
      </div>
      <div className="col-6 app-menu">
        <div className="col-4 app-menu-item">
          <Link to="/">Homepage</Link>
        </div>
        <div className="col-4 app-menu-item">
          <Link to="/movement">Movimentação</Link>
        </div>
        <div className="col-4 app-menu-item">
          <Link to="/balance">Balanço</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header;