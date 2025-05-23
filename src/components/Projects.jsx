import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-COMMERCE website",
    description: "A beautiful functional e-commerce website using MERN stack",
    image: "/projects/Forever.png",
    tags: ["React", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
    demoUrl: "https://ecommerce-frontend-rust-three.vercel.app/",
    github: "https://github.com/Samriddhadewan/ECOMMERCE-app",
  },
  {
    id: 1,
    title: "E-COMMERCE website",
    description: "A beautiful functional e-commerce website using MERN stack",
    image: "/projects/Home.png",
    tags: ["React", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
    demoUrl: "https://ecommerce-frontend-rust-three.vercel.app/",
    github: "https://github.com/Samriddhadewan/ECOMMERCE-app",
  },
  {
    id: 1,
    title: "E-COMMERCE website",
    description: "A beautiful functional e-commerce website using MERN stack",
    image: "/projects/A3.png",
    tags: ["React", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
    demoUrl: "https://ecommerce-frontend-rust-three.vercel.app/",
    github: "https://github.com/Samriddhadewan/ECOMMERCE-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-25 px-4 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, Each projects was carefully
          crafted with attention to detail, performance and user user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 border font-semibold py-1 bg-muted rounded-full text-xs bg-primary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
           
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              {/* links */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    href={project.demoUrl}
                    target="_blank"
                  >
                    {" "}
                    <ExternalLink size={20} />{" "}
                  </a>
                  <a
                  target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    href={project.github}
                  >
                    {" "}
                    <Github size={20} />{" "}
                  </a>
                </div>
              </div>
                 </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
          <a target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" href={'https://github.com/Samriddhadewan'}>Check out my github <ArrowRight size={20}/> </a>
         </div>
      </div>
    </section>
  );
};

export default Projects;
