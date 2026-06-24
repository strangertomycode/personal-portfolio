import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components";

const projects = [
  {
    title: "Doctor Booking API",
    description:
      "REST API for end-to-end appointment management between patients and doctors. Built with Django REST Framework with JWT-secured endpoints, role-based access control, doctor availability scheduling, and medical history gating - architected with real-world healthcare access patterns in mind.",
    tags: ["Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs"],
    github: "https://github.com/strangertomycode/doctor-booking-api",
  },
  {
    title: "Excel CRM Sync",
    description:
      "A data pipeline tool that transforms messy client-submitted spreadsheets into clean, import-ready CRM records. Validates and normalises emails and phone numbers, deduplicates via upsert logic, and exports invoicing-ready CSVs - cutting hours of manual data entry for small businesses.",
    tags: ["Python", "Django", "PostgreSQL", "Pandas", "REST APIs"],
    github: "https://github.com/strangertomycode/excel-crm-sync",
  },
  {
    title: "AI Web Scraper",
    description:
      "Natural language-driven scraper that lets non-technical users extract structured data from any website without writing selectors. Powered by LangChain and a local Ollama LLM, with a Streamlit UI for zero-friction use - a practical demonstration of LLM tool-use in a real workflow.",
    tags: ["Python", "Streamlit", "LangChain", "Selenium", "Beautiful Soup"],
    github: "https://github.com/strangertomycode/ai_web_scraper",
  },
  {
    title: "LeetCode Sync Tool",
    description:
      "Developer productivity tool that automatically syncs accepted LeetCode solutions to a GitHub repository, generating a structured README indexed by difficulty and topic. Demonstrates automation thinking and a habit of keeping engineering work organized and visible.",
    tags: ["Python", "GitHub API", "Automation"],
    github: "https://github.com/strangertomycode/leetcode-sync-tool",
  },
  {
    title: "Flappy Bird AI",
    description:
      "A from-scratch implementation of Flappy Bird used as a training environment for a NEAT-based AI agent. The agent evolves over generations, learning collision avoidance and timing purely through fitness selection - a hands-on exploration of neuroevolution and reinforcement concepts.",
    tags: ["Python", "Pygame", "NEAT", "Machine Learning"],
    github: "https://github.com/strangertomycode/flappy_bird_ai_neat",
  },
  {
    title: "Automatic File Sorter",
    description:
      "A file automation tool that monitors a target folder and automatically sorts files into categorised subfolders based on file type - eliminating repetitive manual organisation. Demonstrates practical automation thinking applied to a common developer and power-user pain point.",
    tags: ["Python", "Automation"],
    github: "https://github.com/strangertomycode/automatic-file-sorter",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Things I have
            <span className="font-serif italic font-normal text-white"> actually built.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A few projects I worked on while learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a key={idx} href={project.github} target="_blank" rel="noopener noreferrer" className="block">
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 h-[280px] md:h-[320px] lg:h-[200px] flex flex-col"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="p-5 space-y-3 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary
        group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm flex-1 line-clamp-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/strangertomycode" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
