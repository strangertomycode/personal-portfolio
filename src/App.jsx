import { Navbar, Footer } from "./loayouts";
import { About, Contact, Education, Hero, Project } from "./sections";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
