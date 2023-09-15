import { useContext } from 'react';
import AppContext from '../../context/context';
import Form from 'react-bootstrap/Form';
export default function Projects() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='container pt-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 >Projects</h1>
          <Form.Control className='h-75' type="search" placeholder="Search" />
        </div>
      </div>
    </main>
  )
}