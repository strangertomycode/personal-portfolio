import Navbar from "./loayouts/Navbar";
import { About, Contact, Education, Hero, Project, Skill } from "./sections";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
