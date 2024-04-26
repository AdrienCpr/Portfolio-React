import React, {useEffect, useState } from 'react';
import {FiX, FiMenu} from "react-icons/fi";
import {Link as ScrollLink} from 'react-scroll';
import DarkMode from "../components/DarkMode";
import DropDownLanguage from "../components/DropDownLanguage";
import {useLocation, useNavigate} from "react-router-dom";

const Header = ({language, setLanguage, darkMode, setDarkMode}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const params = {
        colors :
            {
                darkNavBar: [6, 70, 99],
                lightNavBar: [143, 144, 146]
            },
        fr: {
            login: "Connection",
            home : "Accueil",
            about: "À propos",
            skills: "Compétences",
            timeline: "Chronologie",
            projects: "Projets",
            contact: "Contact",
            blog: "Articles"
        },
        en: {
            login: "Login",
            home: "Home",
            about: "About",
            skills: "Skills",
            timeline: "Timeline",
            projects: "Projects",
            contact: "Contact",
            blog: "Blog",
        },
    }

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerTransparency = Math.min(scrollPosition / 500, 1);

    function rgbToString(rgb) {
        return rgb.join(',');
    }

    let backgroundColor = darkMode
        ? `rgba(${rgbToString(params.colors.darkNavBar)}, ${headerTransparency})`
        : `rgba(${rgbToString(params.colors.lightNavBar)}, ${headerTransparency})`;

    return (
        <header className={`px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50
            bg-lightSecondary
            dark:bg-darkSecondary`}
            style={{ backgroundColor }}
        >

            {/* Menu Mobile */}
            <button
                className="lg:hidden ml-auto text-lightQuaternary dark:text-darkQuaternary"
                onClick={toggleMenu}
            >
                {isMenuOpen ? "" : <FiMenu size={24}/>}
            </button>
            <nav className={`fixed inset-y-0 left-0 z-50 bg-lightSecondary dark:bg-darkSecondary w-1/2 lg:w-64 p-4 transition-transform transform-gpu ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
            >
                <div>
                    <button
                        className="absolute top-4 right-4 text-lightQuaternary dark:text-darkQuaternary"
                        onClick={toggleMenu}
                    >
                        <FiX size={24}/>
                    </button>
                </div>
                <div>
                    <DropDownLanguage language={language} setLanguage={setLanguage} />
                </div>

                <div className="flex flex-col gap-4 mt-12">
                    {currentPath !== "/" ?
                        <>
                            <button onClick={()=>{navigate("/")}}
                                    className="text-sm font-medium hover:underline underline-offset-4
                            cursor-pointer
                            text-lightQuaternary
                            dark:text-darkQuaternary">
                                {params[language].home}
                            </button>
                        </>
                        :
                        <>
                            <button onClick={()=>{navigate("/login")}}
                                    className="text-sm font-medium hover:underline underline-offset-4
                            cursor-pointer
                            text-lightQuaternary
                            dark:text-darkQuaternary">
                                {params[language].login}
                            </button>
                            <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                        className="text-sm font-medium hover:underline underline-offset-4
                            cursor-pointer
                            text-lightQuaternary
                            dark:text-darkQuaternary">
                                {params[language].about}
                            </ScrollLink>

                            <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                        className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                            text-lightQuaternary
                            dark:text-darkQuaternary">
                                {params[language].skills}
                            </ScrollLink>

                            <ScrollLink to="timeline" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                        className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                        text-lightQuaternary
                        dark:text-darkQuaternary">
                                {params[language].timeline}
                            </ScrollLink>


                            <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                        className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                        dark:text-darkQuaternary
                        text-lightQuaternary">
                                {params[language].projects}
                            </ScrollLink>

                            <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                        className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                        dark:text-darkQuaternary
                        text-lightQuaternary">
                                {params[language].contact}
                            </ScrollLink>
                            <button onClick={()=>{navigate("/blog")}}
                                    className="text-sm font-medium hover:underline underline-offset-4
                            cursor-pointer
                            text-lightQuaternary
                            dark:text-darkQuaternary">
                                {params[language].blog}
                            </button>
                        </>
                    }
                </div>

                <div className={`fixed bottom-4 z-50 ${isMenuOpen ? 'lg:hidden' : ''}`}>
                    <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>
            </nav>

            {/* Menu PC */}
            <nav className="ml-auto flex gap-4 sm:gap-6 hidden lg:flex">
                {currentPath !== "/" ?
                    <>
                        <button onClick={()=>{navigate("/")}}
                                    className="text-sm font-medium hover:underline underline-offset-4
                                cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary">
                            {params[language].home}
                        </button>
                    </>
                    :
                    <>
                        <button onClick={()=>{navigate("/login")}}
                                className="text-sm font-medium hover:underline underline-offset-4
                                cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary">
                            {params[language].login}
                        </button>
                        <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                    className="text-sm font-medium hover:underline underline-offset-4
                                cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary">
                            {params[language].about}
                        </ScrollLink>

                        <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                    className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary">
                            {params[language].skills}
                        </ScrollLink>

                        <ScrollLink to="timeline" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                    className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary">
                            {params[language].timeline}
                        </ScrollLink>

                        <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                    className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                dark:text-darkQuaternary
                                text-lightQuaternary">
                            {params[language].projects}
                        </ScrollLink>

                        <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                    className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                dark:text-darkQuaternary
                                text-lightQuaternary">
                            {params[language].contact}
                        </ScrollLink>
                        <button onClick={()=>{navigate("/blog")}}
                                className="text-sm font-medium hover:underline underline-offset-4
                                cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary">
                            {params[language].blog}
                        </button>
                    </>
                }

                <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>

                <DropDownLanguage language={language} setLanguage={setLanguage} />
            </nav>

        </header>
    );
};

export default Header;