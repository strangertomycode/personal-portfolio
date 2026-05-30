import { Code2, Database, BookOpen, BrainCircuit } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Building REST APIs with Django and DRF, focusing on clean architecture and role-based access control.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing database schemas with transactional safety and query optimization in mind.",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Exploration",
    description: "Integrating language models and ML concepts into Python applications.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Currently pursuing M.Tech in AI & Software Engineering.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white"> working software.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Sreeram, a software engineer currently pursuing M.Tech in Computer Science and Engineering at Cochin
                University of Science and Technology.
              </p>
              <p>
                I'm interested in backend engineering, API design, and applied AI — and I'm looking for roles where I
                can contribute across these areas. Most of my hands-on experience is in Python and Django, but I pick up
                new stacks quickly and enjoy working across different parts of a system.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I'm early in my career, but I take building seriously — every project I work on is an attempt to
                understand something deeper and make something real."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
