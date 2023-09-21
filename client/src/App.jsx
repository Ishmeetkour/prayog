import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css'
import { useContext } from 'react';
import AppContext from './context/context';
// Define lazy-loaded components
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Login = lazy(() => import('./pages/auth/login'));
const Register = lazy(() => import('./pages/auth/register'));
const NotFound = lazy(() => import('./components/NotFound'));
const Projects = lazy(() => import('./pages/projects'));
const Workshops = lazy(() => import('./pages/workshops'));
const Community = lazy(() => import('./pages/community'));
const Profile = lazy(() => import('./pages/profile'));
const Project = lazy(() => import('./pages/projects/Project'));
function App() {

  const states = useContext(AppContext);
  const { logged } = states;

  const studentRoutes = logged ? (
    <Route exact path="/profile" element={<Profile />} />
  ) : null;

  const communityRoute = logged ? (
    <Route exact path='/community' element={<Community />} />
  ) : null;


  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:id" element={<Project />} />
          <Route exact path="/workshops" element={<Workshops />} />
          <Route exact path="/about" element={<About />} />
          {studentRoutes}
          {communityRoute}
          <Route exact path="/auth/login" element={<Login />} />
          <Route exact path="/auth/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
