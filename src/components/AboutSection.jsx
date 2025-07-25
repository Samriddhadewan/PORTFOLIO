import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* left one  */}
          <div className="space-y-6 ">
          <h3 className="text-2xl font-semibold">Passionate web developer</h3>
          <p className="text-muted-foreground">I’m a passionate and self-motivated web developer with hands-on experience in building responsive and user-friendly websites using modern tools like React, Vite, Tailwind CSS, and Node.js. I enjoy turning complex problems into simple, clean, and efficient code.</p>
          <p className="text-muted-foreground">I’ve built several full-stack projects that include authentication, API integration, CRUD operations, and database connectivity using MongoDB. My goal is to continue growing as a developer and build impactful applications that solve real-world problems.</p>
           <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">Get in Touch</a>
            <a href="/Samriddha_resume.pdf"
            download="Samriddha_resume.pdf"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
          </div>
          </div>
          {/* right one  */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              {/* inside the box  */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">Designing Intuitive user interfaces and seamless user experience</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">Leading Projects from conception with agile methodologies</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
