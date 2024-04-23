import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
      <div className={`flex flex-col min-h-screen
                        bg-lightPrimary
                        dark:bg-darkPrimary
                        transition-all duration-500`}>
        <Header/>

        <main className="flex-1 mx-auto overflow-hidden">
          <section id="about" className="w-full py-10">
            <About />
          </section>

          <section id="skills"
                   className={`w-full py-12 md:py-24 lg:py-32 bg-lightSecondary dark:bg-darkSecondary`}>
            <Skills />
          </section>

          <section id="timeline" className="w-full text-center py-12 md:py-24 lg:py-32">
            <Timeline />
          </section>

          <section id="projects" className={`w-full py-12 md:py-24 lg:py-32 bg-lightSecondary dark:bg-darkSecondary`}>
            <Projects />
          </section>

          <section id="contact" className="w-full text-center py-12 md:py-24 lg:py-32">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
  );
}

export default App;
