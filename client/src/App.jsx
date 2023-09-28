import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const User = lazy(() => import('./pages/user'));
const Login = lazy(() => import('./pages/auth/login'));
const Register = lazy(() => import('./pages/auth/register'));
const Projects = lazy(() => import('./pages/projects'));
const Workshops = lazy(() => import('./pages/workshops'));
const View = lazy(()=>import('./pages/projects/view')) ;
const Project = lazy(()=>import('./pages/projects/project')) ;
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/loader';
import { useSelector } from 'react-redux';


function App() {
  const logged = useSelector(state=>state.user.logged);
  const profileRoute = logged ? (
    <Route exact path="/profile" element={<User />} />
  ) : null;
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/workshops" element={<Workshops />} />
          {profileRoute}
          <Route exact path="/auth/login" element={<Login />} />
          <Route exact path="/auth/register" element={<Register />} />
          <Route exact path="/projects/view" element={<View />} />
          <Route exact path="/projects/:id" element={<Project />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
export default App
