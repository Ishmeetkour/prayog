import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppState from './context/state';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import './App.css'

// Define lazy-loaded components
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Login = lazy(() => import('./pages/auth/login'));
const Register = lazy(() => import('./pages/auth/register'));
const NotFound = lazy(() => import('./components/NotFound'));
const Projects = lazy(() => import('./pages/projects'));
const MiniProjects = lazy(() => import('./pages/mini-projects'));
const Workshops = lazy(() => import('./pages/workshops'));
const Vichar = lazy(() => import('./pages/vichar'));
const Profile = lazy(() => import('./pages/profile'));
const Institute = lazy(() => import('./pages/institute'));

=======
import NotFound from './pages/NotFound';
import Projects from './pages/projects';
import MiniProjects from './pages/mini-projects';
import Workshops from './pages/workshops';
import Vichar from './pages/vichar';
import Footer from './components/Footer';
>>>>>>> d0b8622eff039384625675cb82fe99d80d4794d2
function App() {
  const isStudent = false;
  const isInstitute = false;

  const studentRoutes = isStudent ? (
    <Route exact path="/profile" element={<Profile />} />
  ) : null;

  const instituteRoutes = isInstitute ? (
    <Route exact path="/institute" element={<Institute />} />
  ) : null;

  return (
    <BrowserRouter>
      <AppState>
        <Navbar />
<<<<<<< HEAD
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/mini-projects" element={<MiniProjects />} />
            <Route exact path="/workshops" element={<Workshops />} />
            <Route exact path="/vichar" element={<Vichar />} />
            <Route exact path="/about" element={<About />} />
            {studentRoutes}
            {instituteRoutes}
            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/auth/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
=======
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
        <Footer/>
>>>>>>> d0b8622eff039384625675cb82fe99d80d4794d2
      </AppState>
    </BrowserRouter>
  );
}

export default App;
