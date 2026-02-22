import React, { useState } from 'react';

const skills = [
  { name: "HTML/CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "React js", level: 100, category: "frontend" },
  { name: "Vue js", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Material UI", level: 100, category: "frontend" },
  { name: "Redux Toolkit", level: 90, category: "frontend" },
  { name: "Java", level: 95, category: "backend" },
  { name: "Nodejs", level: 95, category: "backend" },
  { name: "Express js", level: 95, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },
  { name: "Spring Boot", level: 90, category: "backend" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
  { name: "ChatGPT", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen font-bold text-3xl text-glow px-4 py-8 mt-3">
      <h1 className="text-2xl md:text-3xl mb-8 mt-16 text-center">
        My <span className="text-primary">Skills</span>
      </h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            aria-pressed={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 text-sm rounded-full border-2 transition-all duration-300
              ${selectedCategory === cat
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-transparent text-primary border-primary/50 hover:border-primary hover:shadow'}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="gradient-border flex flex-col items-start bg-primary/20 p-4 rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold text-foreground mb-2">{skill.name}</h2>
            <div className="w-full bg-background/30 h-3 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm mt-1 text-muted-foreground">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
