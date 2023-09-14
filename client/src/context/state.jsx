import { useState } from "react"
import AppContext from './context';
import PropTypes from 'prop-types';

const AppState = (props) => {

    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }

    return (
        <AppContext.Provider value={{ darkTheme, toggleTheme }}>
            {props.children}
        </AppContext.Provider>
    )
}

AppState.propTypes = {
    children: PropTypes.node.isRequired
};
export default AppState;