import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import AppState from './context/state';
import NotFound from './pages/NotFound';
import Projects from './pages/projects';
import MiniProjects from './pages/mini-projects';
import Workshops from './pages/workshops';
import Vichar from './pages/vichar';
function App() {

  return (
    <BrowserRouter>
      <AppState>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/mini-projects' element={<MiniProjects />} />
          <Route exact path='/workshops' element={<Workshops />} />
          <Route exact path='/vichar' element={<Vichar />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='auth/login' element={<Login />} />
          <Route exact path='auth/register' element={<Register />} />
          <Route exact path='/*' element={<NotFound />} />
        </Routes>
      </AppState>
    </BrowserRouter>
  )
}

export default App
