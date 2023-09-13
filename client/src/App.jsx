import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Login from './pages/login';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
