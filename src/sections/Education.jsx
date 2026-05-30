import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";

const education = [
  {
    degree: "M.Tech in Computer Science and Engineering",
    specialisation: "AI & Software Engineering",
    institution: "Cochin University of Science and Technology",
    period: "2024 – Present",
    highlights: [
      "Specialising in Artificial Intelligence and Software Engineering",
      "Coursework includes Deep Learning, Soft Computing, Agile Software Engineering, and Advanced Optimization Techniques",
      "Dissertation: Lithospheric Strength Estimation Engine — a Python-based inversion engine for estimating the Earth's effective elastic thickness",
      "Qualified GATE 2025 in Data Science & AI",
    ],
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    specialisation: null,
    institution: "Ahalia School of Engineering and Technology",
    period: "2020 – 2024",
    highlights: [
      "Completed undergraduate studies in Computer Science and Engineering",
      "Built foundational knowledge in algorithms, data structures, databases, and software development",
    ],
  },
];

const Education = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % education.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + education.length) % education.length);
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground
          text-sm font-medium tracking-wider
          uppercase animate-fade-in"
          >
            Education
          </span>
          <h2
            className="text-4xl md:text-5xl
          font-bold mt-4 mb-6 animate-fade-in
          animation-delay-100 text-secondary-foreground"
          >
            Where I
            <span
              className="font-serif italic
            font-normal text-white"
            >
              {" "}
              learned to build.
            </span>
          </h2>
        </div>

        {/* Education Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div
              key={activeIdx}
              className="glass p-6 rounded-3xl md:p-8 glow-border animate-fade-in animation-delay-200 h-[260px] md:h-[320px] flex flex-col animate-fade-slide"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="pt-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">{education[activeIdx].degree}</h3>

                    {education[activeIdx].specialisation && (
                      <p className="text-primary mt-1 text-sm font-medium">{education[activeIdx].specialisation}</p>
                    )}

                    <p className="text-muted-foreground mt-1">{education[activeIdx].institution}</p>
                  </div>

                  <span className="text-sm text-muted-foreground glass px-4 py-2 rounded-full">
                    {education[activeIdx].period}
                  </span>
                </div>

                {/* Scrollable Highlights */}
                <ul className="hidden md:block space-y-3 overflow-y-auto flex-1 pr-2 no-scrollbar">
                  {education[activeIdx].highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {education.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
