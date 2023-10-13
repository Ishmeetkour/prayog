import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Login = lazy(() => import('./pages/auth/login'));
const Register = lazy(() => import('./pages/auth/register'));
const Projects = lazy(() => import('./pages/projects'));
const Workshops = lazy(() => import('./pages/workshops'));
const ProjectsView = lazy(() => import('./pages/projects/view'));
const WorkshopsView = lazy(() => import('./pages/workshops/view'));
const Project = lazy(() => import('./pages/projects/project'));
const MyProjects = lazy(() => import('./pages/user/student/projects'));
const Student = lazy(() => import('./pages/user/student'));
const Institute = lazy(() => import('./pages/user/institute'));
const NotFound = lazy(() => import('./components/not-found'));
const MyWorkshops = lazy(() => import('./pages/user/institute/workshops'));
const StudentDashboard = lazy(() => import('./pages/user/student/dashboard'));
const InstituteDashboard = lazy(() => import('./pages/user/institute/dashboard'));
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/loader';
import { useSelector } from 'react-redux';


function App() {
  const logged = useSelector(state => state.user.logged);
  const type = useSelector(state => state.user.details.type);
  const profileRoute = logged ? (
    type === 'student'
      ? <Route exact path="/profile"  >

        <Route exact index={true} element={<Student />} />
        <Route exact path="projects" element={<MyProjects />} />
        <Route exact path="dashboard" element={<StudentDashboard />} />

      </Route>
      : <Route exact path="/profile"  >

        <Route exact index={true} element={<Institute />} />
        <Route exact path="workshops" element={<MyWorkshops />} />
        <Route exact path="dashboard" element={<InstituteDashboard />} />

      </Route>
  ) : null;

  const loginRoute = !logged ? (
    <Route exact path="/auth/login" element={<Login />} />
  ) : null;
  const registerRoute = !logged ? (
    <Route exact path="/auth/register" element={<Register />} />
  ) : null;

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/workshops" element={<Workshops />} />
          {profileRoute}
          {loginRoute}
          {registerRoute}
          <Route exact path="/projects/view" element={<ProjectsView />} />
          <Route exact path="/workshops/view" element={<WorkshopsView />} />
          <Route exact path="/projects/:id" element={<Project />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
export default App
