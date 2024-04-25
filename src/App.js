import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import {useState} from "react";

function App() {
    const [language, setLanguage] = useState(() => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage ? storedLanguage : "fr";
    });

    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });
    //
    // useEffect(() => {
    //     fetch('http://localhost:3021/colors')
    //         .then(response => response.json())
    //         .then(data => {
    //             for (const color in data) {
    //                 document.documentElement.style.setProperty(`--color-${color}`, data[color]);
    //             }
    //         });
    // }, []);

    return (
      <div className={`flex flex-col min-h-screen
                        bg-lightPrimary
                        dark:bg-darkPrimary
                        transition-all duration-500`}>
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode}/>

        <main className="flex-1 mx-auto overflow-hidden">
          <section id="about" className="w-full py-10">
            <About language={language} />
          </section>

          <section id="skills"
                   className={`w-full py-12 md:py-24 lg:py-32 bg-lightSecondary dark:bg-darkSecondary`}>
            <Skills language={language} />
          </section>

          <section id="timeline" className="w-full text-center py-4 md:py-8 lg:py-10">
            <Timeline language={language} darkMode={darkMode}/>
          </section>

          <section id="projects" className={`w-full py-4 md:py-8 lg:py-10 bg-lightSecondary dark:bg-darkSecondary`}>
            <Projects language={language} />
          </section>

          <section id="contact" className="w-full text-center py-6 md:py-12 lg:py-16">
            <Contact language={language} />
          </section>
        </main>

        <Footer language={language} />
      </div>
  );
}

export default App;
