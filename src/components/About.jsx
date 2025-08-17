import { Code, Projector } from 'lucide-react';
import React from 'react';
import Resume from '../components/resume.pdf'
const About = () => {
  return (
    <section id="about" className="min-h-screen font-bold text-3xl pt-14 text-glow">
      <h1 className="p-3 m-3 mb-6">
        About<span className="text-primary"> Me</span>
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column - Description */}
        <div className="flex flex-col justify-center items-center gap-3 text-center md:text-left">
          <h2 className="text-glow text-2xl ">Passionate Web Developer</h2>
          <p className="text-[15px] text-foreground/90 font-semibold">
            Passionate and detail-oriented Front-End Developer seeking an entry-level position to leverage skills in HTML, CSS, JavaScript, and React.js to build responsive, user-friendly web applications. Eager to contribute to a dynamic team and grow as a professional in the field of web development.
          </p>
          <p className="text-[15px] pt-5 text-foreground/80 font-semibold">
            I’m always eager to learn new technologies. With hands-on project experience and an internship background, I'm ready to contribute to real-world development teams and build engaging digital experiences.
          </p>
          <div className="flex justify-center md:justify-start items-center pt-4 gap-3">
            <a href="#contact" className="cosmic-button w-[140px] p-1 text-sm font-bold flex items-center justify-center ">Get in Touch</a>
            <a href={Resume} download='AJITH_TS_RESUME'  className="cosmic-button text-primary bg-primary/20 border-2 border-primary justify-center flex w-[140px] p-1 text-sm font-bold">Download CV</a>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="flex flex-col gap-4 items-center">
          {[
            {
              icon: <Code />,
              title: "Front end development",
              description: "Creating responsive websites and web applications with modern frameworks"
            },
            {
              icon: <Code />,
              title: "Backend development",
              description: "Backend Developer focused on building efficient, secure, and scalable server-side applications"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-primary/10 gradient-border card-hover flex items-center gap-4 w-full max-w-[500px] p-4"
            >
              <div className="bg-primary/40 text-primary p-3 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="text-foreground">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[15px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
