import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Login from './pages/auth/login';
import AppState from './context/state';

function App() {

  return (
    <BrowserRouter>
    <AppState>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/auth/login' element={<Login />}></Route>
      </Routes>
    </AppState>
    </BrowserRouter>
  )
}

export default App
