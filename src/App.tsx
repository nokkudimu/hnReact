import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

function App() {

  return (
    <div id='container'>
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
