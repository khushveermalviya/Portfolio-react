import React from 'react';
import { motion } from 'framer-motion';
import { TbBrandCpp, TbBrandVscode } from 'react-icons/tb';
import { DiJavascript, DiLinux, DiNodejsSmall } from 'react-icons/di';
import { FaJava, FaReact, FaHtml5, FaGithubAlt, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiKubernetes, SiDocker, SiJenkins, SiAnsible, SiGraphql, SiApollographql, SiRedis, SiPostgresql, SiMongodb, SiRedux, SiCapacitor, SiChartdotjs, SiPrometheus, SiGrafana, SiSelenium } from 'react-icons/si';
import { VscAzureDevops, VscAzure } from 'react-icons/vsc';
import { BiLogoMongodb } from 'react-icons/bi';
const skillCategories = [
  {
    title: "Languages",
    icons: [
      { Icon: DiJavascript, name: 'JavaScript' },
      { Icon: FaHtml5, name: 'HTML' },
      { Icon: TbBrandCpp, name: 'C/C++' },
      { Icon: FaJava, name: 'Java' }
    ]
  },
  {
    title: "Frontend",
    icons: [
      { Icon: FaReact, name: 'React' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS' },
      { Icon: SiRedux, name: 'Zustand' },
      { Icon: SiCapacitor, name: 'Capacitor/Ionic' },
      { Icon: SiChartdotjs, name: 'Chart.js' }
    ]
  },
  {
    title: "Backend",
    icons: [
      { Icon: DiNodejsSmall, name: 'Node.js' },
      { Icon: SiExpress, name: 'Express.js' },
      { Icon: SiApollographql, name: 'Apollo Server' },
      { Icon: SiGraphql, name: 'GraphQL' }
    ]
  },
  {
    title: "Databases",
    icons: [
      { Icon: BiLogoMongodb, name: 'MongoDB' },
      { Icon: SiMongodb, name: 'SQL' },
      { Icon: SiPostgresql, name: 'Postgres (Cloud-based)' },
      { Icon: SiRedis, name: 'Redis' }
    ]
  },
  {
    title: "DevOps",
    icons: [
      { Icon: SiDocker, name: 'Docker' },
      { Icon: FaGithubAlt, name: 'GitHub Actions' },
      { Icon: SiKubernetes, name: 'Kubernetes' },
      { Icon: VscAzureDevops, name: 'Azure DevOps' }
    ]
  },
  {
    title: "Testing and Monitoring Tools",
    icons: [
      { Icon: SiGrafana, name: 'Grafana' },
      { Icon: SiPrometheus, name: 'Prometheus' },
      { Icon: SiSelenium, name: 'Selenium' }
    ]
  },
  {
    title: "Tools",
    icons: [
      { Icon: FaGithubAlt, name: 'Git' },
      { Icon: TbBrandVscode, name: 'VS Code' },
      { Icon: DiLinux, name: 'Linux' }
    ]
  },
  {
    title: "Cloud",
    icons: [
      { Icon: FaAws, name: 'AWS' },
      { Icon: VscAzure, name: 'Azure' }
    ]
  }
];
function StarryBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        const animationDuration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${animationDuration}s infinite ${delay}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        );
      })}
    </div>
  );
}

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
        {category.title}
      </h3>
      <div className="grid grid-cols-4 gap-6">
        {category.icons.map(({ Icon, name }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="relative">
              <Icon className="text-4xl text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
              <div className="absolute -inset-2 bg-purple-500 opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-300" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className="relative min-h-screen py-20 px-4  overflow-hidden">
     
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h2 className="text-6xl text-center mb-16 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} category={category} index={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}