import { GithubIcon, Share } from 'lucide-react';
import React from 'react';

const projects = [
  {
    id: 1,
    title: "FOODIES HUB",
    description: "Online food ordering web application designed with a user-friendly and responsive front-end.",
    tools: "React, Tailwind CSS, Redux Toolkit",
    image: "/Projects/project1.png",
    github: "https://ajithaji06.github.io/FoodApp/"
  },
  {
    id: 2,
    title: "Lgin page with validations",
    description: "A secure login page with real-time form validations to ensure accurate user input and safe authentication",
    tools: "Html, Css, Javasript",
    image: "/Projects/loginpageimg.png",
    github: "https://ajithaji06.github.io/Login-page/"
  },
  {
    id: 3,
    title: "DM DELAY",
    description: "DM Delay allows you to schedule and delay the sending of your direct messages, giving you control over when your message reaches the recipient",
    tools: "React, Axios",
    image: "/Projects/dmdelay.png",
    github: "https://ajithaji06.github.io/DM-DELAY/"
  }
];

const Projects = () => {
  return (
    <div id='project' className="min-h-screen  w-full flex flex-col items-center gap-8 px-4 py-10 mt-30 pt-9">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold text-glow">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <p className="text-[15px] mt-2  text-glow font-semibold text-foreground ">
          Here are some of my recent projects. Each one was carefully crafted with attention to detail, performance, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project) => (
          <div key={project.id} className="bg-primary/20 gradient-border card-hover shadow-lg rounded-2xl p-4 transition hover:scale-[1.02] hover:shadow-xl duration-300">
            <img src={project.image} alt={project.title} className="w-[100%] h-37 object-cover rounded-md mb-4" />
            <h1 className='text-xl font-bold mb-2'>{project.title}</h1>
            <p className="text-sm text-foreground mb-2">{project.description}</p>
            <p className="text-xs text-foreground mb-4"><strong>Tools:</strong> {project.tools}</p>
             <a
              href={project.github}
              target="_blank"
              className=" px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:opacity-90"
            >
              View Project
            </a> 
            <div className="flex justify-end items-center gap-2">
              <Share />
              <GithubIcon href={project.github} className="z-40 " />
            </div>

          </div>

        ))}
      </div>
      <div className='flex min-w-screen justify-center z-40 items-center h-[50px]'>
        <a
          href="https://github.com/ajithaji06"
          target="_blank"
          className="cosmic-button flex justify-between gap-3  cursor-pointer px-2 py-2 text-sm font-medium text-foreground bg-primary rounded hover:opacity-90"
        >
          Check my Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
