import { Dna } from 'react-loader-spinner';
import { useContext } from 'react';
import AppContext from '../context/context';
export default function Loading() {

    const states = useContext(AppContext);
    const { darkTheme } = states;
    return (
        <main className={`bg loader-container ${darkTheme?'bg-dark':''}`}>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"

            />
        </main>
    )
}
