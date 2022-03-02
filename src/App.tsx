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
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div className='app-body'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movimento' element={<Movimento />} />
          <Route path='/balanco' element={<Balanco />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
)

export default App;
