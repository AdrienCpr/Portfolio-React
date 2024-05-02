import React, { useState, useEffect } from 'react';
import { FiX, FiMenu, FiUser } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import DarkMode from '../components/DarkMode';
import DropDownLanguage from '../components/DropDownLanguage';
import { useLocation, useNavigate } from 'react-router-dom';
import ColorPicker from '../components/ColorPicker';

const Header = ({ language, setLanguage, darkMode, setDarkMode, colors, setColors }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const params = {
        fr: {
            login: 'Connexion',
            home: 'Accueil',
            about: 'À propos',
            skills: 'Compétences',
            timeline: 'Chronologie',
            projects: 'Projets',
            contact: 'Contact',
            blog: 'Articles',
        },
        en: {
            login: 'Login',
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            timeline: 'Timeline',
            projects: 'Projects',
            contact: 'Contact',
            blog: 'Blog',
        },
    };

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
        ? `rgba(${rgbToString(colors.navbar.dark)}, ${headerTransparency})`
        : `rgba(${rgbToString(colors.navbar.light)}, ${headerTransparency})`;

    return (
        <header
            className={`px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 transition-colors duration-300`}
            style={{ backgroundColor }}
        >
            {/* Bouton Menu Mobile */}
            <button
                className="lg:hidden ml-auto text-lightQuaternary dark:text-darkQuaternary"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Navigation Mobile */}
            <nav
                className={`fixed inset-y-0 left-0 z-50 bg-lightSecondary dark:bg-darkSecondary w-3/4 p-4 transition-transform duration-300 transform-gpu ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Bouton de fermeture */}
                <div className="flex items-center mb-4">
                    <button
                        className="text-lightQuaternary dark:text-darkQuaternary"
                        onClick={toggleMenu}
                    >
                        <FiX size={24} />
                    </button>

                    <button
                        onClick={() => navigate("/portfolio/login")}
                        className="text-end text-sm ml-4 font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                    >
                        <FiUser />
                    </button>

                    <div className={"ml-4"}>
                        <ColorPicker
                            darkMode={darkMode}
                            colors={colors}
                            setColors={setColors}
                            language={language}
                        />
                    </div>
                    <div className={""}>
                        <DropDownLanguage language={language} setLanguage={setLanguage}/>
                    </div>
                </div>

                {/* Liens de navigation */}
                <div className="flex flex-col gap-4">
                    {currentPath === "/portfolio" || currentPath === "/portfolio/"  ?
                        (
                            <>
                                <button
                                    onClick={() => {
                                        navigate("/portfolio/login");
                                    }}
                                    className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].login}
                                </button>

                                <ScrollLink
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-70}
                                    className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].about}
                                </ScrollLink>

                                <ScrollLink
                                    to="skills"
                                    smooth
                                    duration={500}
                                    spy
                                    exact="true"
                                    offset={-70}
                                    className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].skills}
                                </ScrollLink>

                                <ScrollLink
                                    to="timeline"
                                    smooth
                                    duration={500}
                                    spy
                                    exact="true"
                                    offset={-70}
                                    className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].timeline}
                                </ScrollLink>

                                <ScrollLink
                                    to="projects"
                                    smooth
                                    duration={500}
                                    spy
                                    exact="true"
                                    offset={-70}
                                    className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].projects}
                                </ScrollLink>

                                <ScrollLink
                                    to="contact"
                                    smooth
                                    duration={500}
                                    spy
                                    exact="true"
                                    offset={-70}
                                    className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].contact}
                                </ScrollLink>

                                <button
                                    onClick={() => {
                                        navigate("/portfolio/blog");
                                    }}
                                    className="cursor-pointer text-start text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                                >
                                    {params[language].blog}
                                </button>
                            </>
                        )
                            :
                        (
                        <button
                            onClick={() => {
                                navigate("/portfolio");
                            }}
                            className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                        >
                            {params[language].home}
                        </button>
                        )
                    }
                </div>

                {/* Bouton pour changer le mode de couleur */}
                <div className="fixed bottom-4 z-50">
                    <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </nav>

            {/* Navigation PC */}
            <div className="flex items-center gap-4 flex gap-4 sm:gap-6 hidden lg:flex">
                {currentPath !== "/portfolio/login" && (
                    <button
                        onClick={() => navigate("/portfolio/login")}
                        className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                    >
                        <FiUser />
                    </button>
                )}

                <ColorPicker
                    darkMode={darkMode}
                    colors={colors}
                    setColors={setColors}
                    language={language}
                />
            </div>

            <nav className="ml-auto flex gap-4 sm:gap-6 hidden lg:flex">
                {currentPath === "/portfolio" || currentPath === "/portfolio/" ?
                    (
                        <>
                            <ScrollLink
                                to="about"
                                smooth
                                duration={500}
                                spy
                                exact="true"
                                offset={-70}
                                className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                            >
                                {params[language].about}
                            </ScrollLink>

                            <ScrollLink
                                to="skills"
                                smooth
                                duration={500}
                                spy
                                exact="true"
                                offset={-70}
                                className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                            >
                                {params[language].skills}
                            </ScrollLink>

                            <ScrollLink
                                to="timeline"
                                smooth
                                duration={500}
                                spy
                                exact="true"
                                offset={-70}
                                className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                            >
                                {params[language].timeline}
                            </ScrollLink>

                            <ScrollLink
                                to="projects"
                                smooth
                                duration={500}
                                spy
                                exact="true"
                                offset={-70}
                                className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                            >
                                {params[language].projects}
                            </ScrollLink>

                            <ScrollLink
                                to="contact"
                                smooth
                                duration={500}
                                spy
                                exact="true"
                                offset={-70}
                                className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                            >
                                {params[language].contact}
                            </ScrollLink>

                            <button
                                onClick={() => {
                                    navigate("/portfolio/blog");
                                }}
                                className="text-sm font-medium hover:underline underline-offset-4 text-lightQuaternary dark:text-darkQuaternary"
                            >
                                {params[language].blog}
                            </button>
                        </>
                    )
                    :
                    (
                        <button
                            onClick={() => {
                                navigate("/portfolio");
                            }}
                            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-lightQuaternary dark:text-darkQuaternary"
                        >
                            {params[language].home}
                        </button>
                    )
                }

                <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                <DropDownLanguage language={language} setLanguage={setLanguage} />
            </nav>
        </header>
    );
};

export default Header;
