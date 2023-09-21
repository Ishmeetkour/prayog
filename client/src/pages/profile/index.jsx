import { useContext } from 'react';
import AppContext from '../../context/context';
export default function Student() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={` ${darkTheme ? 'bg-dark text-light' : ''}`}>
      Student Profile
    </main>
  )
}
