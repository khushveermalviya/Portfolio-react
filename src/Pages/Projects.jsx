import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiNextdotjs,SiDocker, SiFirebase,SiMysql ,SiApollographql} from 'react-icons/si';

// Map of technology names to their icons
const techIcons = {
  React: FaReact,
  Node: FaNode,
  Tailwind: SiTailwindcss,
  MongoDB: SiMongodb,
  Express: SiExpress,
  TypeScript: SiTypescript,
  NextJS: SiNextdotjs,
  Firebase: SiFirebase,
  Mysql:SiMysql,
  Apollographql:SiApollographql,
  Docker:SiDocker
};

// Sample projects data - replace with your own
const projects = [
  {
    title: "School management System",
    description: "A full-stack e-commerce platform with real-time inventory management, user authentication, and payment processing integration.",
    longDescription: "Built a comprehensive e-commerce solution that handles everything from inventory management to payment processing. Features include real-time stock updates, user authentication, shopping cart functionality, and secure payment integration via Stripe.",
    image: "/im.jpg",
    technologies: ["React", "Node", "Apollographql", "Mysql","Docker  "],
    github: "https://github.com/khushveermalviya/project",
    live: "https://edusystem.tech",
    features: [
      "User authentication and authorization",
      "Real-time inventory tracking",
      "Secure payment processing",
      "Responsive design"
    ]
  },
  // {
  //   title: "Task Management App",
  //   description: "A collaborative task management application with real-time updates and team collaboration features.",
  //   longDescription: "Developed a robust task management system that enables teams to collaborate effectively. The app includes features like real-time updates, task assignments, deadline tracking, and team chat functionality.",
  //   image: "/api/placeholder/600/400",
  //   technologies: ["TypeScript", "NextJS", "Tailwind", "Mysql"],
  //   github: "https://github.com/yourusername/project2",
  //   live: "https://project2-demo.com",
  //   features: [
  //     "Real-time collaboration",
  //     "Task assignment and tracking",
  //     "Team chat integration",
  //     "Progress analytics"
  //   ]
  // }
];

function TechIcon({ name }) {
  const Icon = techIcons[name];
  return Icon ? (
    <div className="group relative">
      <Icon className="text-2xl text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </div>
  ) : null;
}

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover object-center"
      />
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
        
        <p className="text-gray-300 mb-4">
          {isExpanded ? project.longDescription : project.description}
        </p>

        <motion.div layout className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
          <div className="flex gap-4 mb-4">
            {project.technologies.map(tech => (
              <TechIcon key={tech} name={tech} />
            ))}
          </div>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                {project.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
              <span>Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="text-xl" />
              <span>Live Demo</span>
            </a>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl text-center mb-16 font-bold">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}