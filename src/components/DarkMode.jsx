import React, {useEffect} from 'react';
import {DarkModeSwitch} from "react-toggle-dark-mode";

const DarkMode = ({darkMode, setDarkMode}) => {
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));

            return newMode;
        });
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <DarkModeSwitch
            style={{color: "black"}}
            checked={darkMode}
            onChange={toggleDarkMode}
            moonColor={'#ECB365'}
            size={20}
        />
    );
};

export default DarkMode;