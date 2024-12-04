import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaDocker, FaAws,
  FaDatabase, FaMobile, FaBrain
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiMysql, SiRedis, SiFlutter, SiTensorflow,
  SiPytorch, SiGooglecolab
} from 'react-icons/si';

function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Redis", icon: <SiRedis /> }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Git", icon: <FaGithub /> }
      ]
    },
    {
      name: "Mobile",
      skills: [
        { name: "React Native", icon: <FaReact /> },
        { name: "Flutter", icon: <SiFlutter /> }
      ]
    },
    {
      name: "AI/ML",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Google Colab", icon: <SiGooglecolab /> }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Skills & Technologies</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">{category.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex flex-col items-center p-3 bg-white dark:bg-gray-700/50 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300"
                    >
                      <div className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-700 dark:group-hover:text-violet-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVModal; 