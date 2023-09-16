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
const MiniProjects = lazy(() => import('./pages/mini-projects'));
const Workshops = lazy(() => import('./pages/workshops'));
const Student = lazy(() => import('./pages/profile/student'));
const Institute = lazy(() => import('./pages/profile/institute'));
const Project = lazy(() => import('./pages/projects/Project'));
const MiniProject = lazy(() => import('./pages/mini-projects/MiniProject'));
function App() {

  const states = useContext(AppContext);
  const { isStudent, isInstitute } = states;

  const studentRoutes = isStudent ? (
    <Route exact path="/profile/student" element={<Student />} />
  ) : null;

  const instituteRoutes = isInstitute ? (
    <Route exact path="/profile/institute" element={<Institute />} />
  ) : null;

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:id" element={<Project />} />
          <Route exact path="/mini-projects" element={<MiniProjects />} />
          <Route exact path="/mini-projects/:id" element={<MiniProject />} />
          <Route exact path="/workshops" element={<Workshops />} />
          <Route exact path="/about" element={<About />} />
          {studentRoutes}
          {instituteRoutes}
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
