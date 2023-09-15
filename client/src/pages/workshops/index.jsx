import { useContext } from 'react';
import AppContext from '../../context/context';
export default function Workshops() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      Workshops
    </main>
  )
}
