import './App.css';
import Header from './components/Header/Header'
import FrontPage from './components/Pages/FrontPage'
import Footer from './components/Footer/Footer'
import AppRoutes from './components/Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <AppRoutes />
    </div>
    </BrowserRouter>

  );
}

export default App;
