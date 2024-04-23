import React, {useEffect, useState} from 'react';
import {DarkModeSwitch} from "react-toggle-dark-mode";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });
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