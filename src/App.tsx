import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// pages
import Balance from './pages/Balance';
import Homepage from './pages/Homepage';
import Movement from './pages/Movement';

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
          <Route path='/movement' element={<Movement />} />
          <Route path='/balance' element={<Balance />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
)

export default App;
