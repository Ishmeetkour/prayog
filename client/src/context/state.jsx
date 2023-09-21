import { useState } from "react"
import AppContext from './context';
import PropTypes from 'prop-types';

const theme = localStorage.getItem('darkTheme') ?? 'false';
const AppState = (props) => {
    const [logged, setLogged] = useState(true);
    const [darkTheme, setDarkTheme] = useState(theme === 'true');
    const toggleTheme = () => {
        localStorage.setItem('darkTheme', `${!darkTheme}`);
        setDarkTheme(!darkTheme);
    }
    const toggleLogged = () => {
        setLogged(!logged);
    }

    return (
        <AppContext.Provider value={{ darkTheme, toggleTheme, logged, toggleLogged }}>
            {props.children}
        </AppContext.Provider>
    )
}

AppState.propTypes = {
    children: PropTypes.node.isRequired
};
export default AppState;