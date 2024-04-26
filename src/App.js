import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './templates/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './templates/Footer';
import Login from './pages/Login';
import Blog from './pages/Blog';
import { useState } from 'react';

function App() {
    const [language, setLanguage] = useState(() => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage ? storedLanguage : 'fr';
    });

    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    return (
        <Router>
            <div
                className={`flex flex-col min-h-screen bg-lightPrimary dark:bg-darkPrimary transition-all duration-500`}
            >
                <Header
                    language={language}
                    setLanguage={setLanguage}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <main className="flex-1 mx-auto overflow-hidden">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <section id="about" className="w-full py-10">
                                        <About language={language} />
                                    </section>

                                    <section
                                        id="skills"
                                        className={`w-full py-12 md:py-24 lg:py-32 bg-lightSecondary dark:bg-darkSecondary`}
                                    >
                                        <Skills language={language} />
                                    </section>

                                    <section id="timeline" className="w-full text-center py-4 md:py-8 lg:py-10">
                                        <Timeline language={language} darkMode={darkMode} />
                                    </section>

                                    <section
                                        id="projects"
                                        className={`w-full py-4 md:py-8 lg:py-10 bg-lightSecondary dark:bg-darkSecondary`}
                                    >
                                        <Projects language={language} />
                                    </section>

                                    <section id="contact" className="w-full text-center py-6 md:py-12 lg:py-16">
                                        <Contact language={language} />
                                    </section>
                                </>
                            }
                        />

                        <Route path="/login" element={<Login language={language}/>} />
                        <Route path="/blog" element={<Blog language={language}/>} />
                    </Routes>
                </main>

                <Footer language={language} />
            </div>
        </Router>
    );
}

export default App;
