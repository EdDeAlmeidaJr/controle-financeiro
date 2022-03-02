import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// pages
import Balanco from './pages/Balanco';
import Homepage from './pages/Homepage';
import Movimento from './pages/Movimento';

// components
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';

const App = () => (
  <div className="App">
    <Router>
      <Cabecalho />
      <div className='app-body'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movimento' element={<Movimento />} />
          <Route path='/balanco' element={<Balanco />} />
        </Routes>
      </div>
      <Rodape />
    </Router>
  </div>
)

export default App;
