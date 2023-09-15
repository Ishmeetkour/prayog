import { useContext } from 'react';
import AppContext from '../../context/context';
export default function About() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      About
      
    </main>
  )
}
