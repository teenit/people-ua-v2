import './App.css';
import AppRoutes from './components/Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import './assets/assets.scss';
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
