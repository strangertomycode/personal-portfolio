import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components";

const projects = [
  {
    title: "Doctor Booking API",
    description:
      "A Doctor Appointment Booking REST API built with Django and Django REST Framework featuring JWT authentication, doctor availability scheduling, appointment booking, cancellation, and role-based permissions. Includes doctor verification flow, medical history access control, filtering and pagination",
    tags: ["Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs"],
    github: "https://github.com/strangertomycode/doctor-booking-api",
  },
  {
    title: "Excel CRM Sync",
    description:
      "A Django web app that imports messy Excel/CSV spreadsheets, validates and cleans customer records (emails, phone numbers), prevents duplicates via email-based upsert, and exports CRM and invoicing-ready CSV files, eliminating manual data re-entry for small businesses.",
    tags: ["Python", "Django", "PostgreSQL", "Pandas", "REST APIs"],
    github: "https://github.com/strangertomycode/excel-crm-sync",
  },
  {
    title: "AI Web Scraper",
    description:
      "An AI-powered web scraper that lets users extract data from websites using plain English instructions. It combines Selenium, LangChain, and Ollama’s any model with a simple Streamlit interface.",
    tags: ["Python", "Streamlit", "LangChain", "Selenium", "Beautiful Soup"],
    github: "https://github.com/strangertomycode/ai_web_scraper",
  },
  {
    title: "Zomato EDA",
    description:
      "An exploratory data analysis (EDA) on a Zomato restaurants dataset, focusing on the restaurant landscape in Kochi. It visualizes various aspects such as establishment types, ratings, cuisines, and customer votes.",
    tags: ["Python", "Jupyter Notebook", "Pandas", "Numpy"],
    github: "https://github.com/strangertomycode/zomato-eda",
  },
  {
    title: "Flappy Bird AI",
    description:
      "A Flappy Bird game built using Pygame where a bird navigates through moving pipes by jumping at the right moments. The game serves as the environment for training an AI agent using the NEAT algorithm to learn and play autonomously.",
    tags: ["Python", "NEAT"],
    github: "https://github.com/strangertomycode/flappy_bird_ai_neat",
  },
  {
    title: "Fake Store App",
    description:
      "A fully functional shopping website built with React and the FakeStore API, featuring user authentication, product listing, detailed product pages, and cart management. It demonstrates modern state management with Context and React hooks alongside a responsive, mobile-first plain CSS design.",
    tags: ["JavaScript", "Reactjs", "HTML", "CSS", "FakeStore API"],
    github: "https://github.com/strangertomycode/react_fake_store_app",
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
