import { useContext } from 'react';
import AppContext from '../context/context';
export default function NotFound() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='h-100 d-flex justify-content-center align-items-center' >
        <h2 className='m-0'>Page Not Found</h2>
      </div>
    </main>
  )
}
