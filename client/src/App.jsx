import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppState from './context/state';
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
import Footer from './components/Footer';
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
          <Footer />
        </Suspense>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
