import { useContext } from 'react';
import AppContext from '../context/context';
export default function NotFound() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      Page Not Found
    </main>
  )
}
