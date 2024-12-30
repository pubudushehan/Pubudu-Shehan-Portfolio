import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaDocker, FaAws,
  FaDatabase, FaMobile, FaBrain
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiMysql, SiRedis, SiFlutter, SiTensorflow,
  SiPytorch, SiGooglecolab
} from 'react-icons/si';

function Resume() {
  const [activeTab, setActiveTab] = useState('about');
  
  const tabs = [
    {
      id: 'about',
      label: 'About Me',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'education',
      label: 'Education',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering Technology",
      school: "University of Sri Jayawardenapura",
      year: "2022 - 2026",
      description: "Undergraduate student of Software Engineering Technology",
      achievements: [
        "Third Year Undergraduate",
        "Secretary of Technology Sub-Committee"
      ]
    },
    {
      degree: "A/L Examination",
      school: "Kuliyapitiya Central College",
      year: "2018 - 2020",
      description: "Learned the basics of Information & Communication Technology",
      achievements: [
        "ICT Stream",
        "Sub President of Mediation Board"
      ]
    },
    {
      degree: "O/L Examination",
      school: "NK/ Diwullegoda M.V",
      year: "2013 - 2017",
      description: "Completed secondary education with excellent results",
      achievements: [
        "School Prefect",
        "Member of ICT Society"
      ]
    }
  ];

  const experience = [
    {
      position: "Test Genius Quiz Web Site",
      company: "Full-stack Quiz App",
      year: "2024",
      responsibilities: [
        "Developed a comprehensive quiz platform for A/L students using React and Node.js",
        "Implemented real-time quiz functionality and progress tracking system",
        "Created responsive design using Tailwind CSS for optimal user experience",
        "Integrated MongoDB for efficient data management and user progress storage"
      ]
    },
    {
      position: "Portfolio Website",
      company: "Personal Project",
      year: "2024",
      responsibilities: [
        "Designed and developed a modern portfolio website using React and Tailwind CSS",
        "Implemented dark mode support and smooth animations for enhanced user experience",
        "Created responsive layouts that work seamlessly across all devices",
        "Integrated email contact form functionality using EmailJS"
      ]
    }
  ];

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiNextdotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ]
    },
    {
      name: "Development Tools",
      skills: [
        { name: "Git", icon: <FaGithub /> },
        { name: "VS Code", icon: <SiNextdotjs /> },
        { name: "Postman", icon: <SiPostgresql /> },
        { name: "Docker", icon: <FaDocker /> }
      ]
    },
    {
      name: "Design Tools",
      skills: [
        { name: "Figma", icon: <SiNextdotjs /> },
        { name: "Adobe XD", icon: <SiNextdotjs /> },
        { name: "Photoshop", icon: <SiNextdotjs /> },
        { name: "Illustrator", icon: <SiNextdotjs /> }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "RESTful APIs", icon: <FaNodeJs /> },
        { name: "Responsive Design", icon: <SiTailwindcss /> },
        { name: "UI/UX Design", icon: <SiNextdotjs /> },
        { name: "Problem Solving", icon: <FaBrain /> }
      ]
    }
  ];

  const aboutMe = {
    description: "I am an undergraduate student pursuing a Bachelor's degree in Software Engineering Technology at the University of Sri Jayawardenapura. I am passionate about web development and creating innovative solutions that make a positive impact. Currently focusing on full-stack development and exploring machine learning technologies.",
    highlights: [
      "Full-stack developer with expertise in React and Node.js",
      "Created Test Genius Quiz platform for A/L students",
      "Skilled in modern web technologies and responsive design",
      "Strong foundation in software engineering principles"
    ],
    interests: [
      "Web Development",
      "Machine Learning",
      "UI/UX Design",
      "Teaching"
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Description */}
              <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  {aboutMe.description}
                </p>
              </div>

              {/* Interests Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Interests
                </h3>
                <div className="space-y-3">
                  {aboutMe.interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors duration-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Section */}
              <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Professional Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {aboutMe.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        );

      case 'education':
        return (
          <AnimatedSection>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span 
                        key={i}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        );

      case 'experience':
        return (
          <AnimatedSection className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{exp.year}</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.position}</h4>
                <div className="text-gray-600 dark:text-gray-300 mb-4">{exp.company}</div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimatedSection>
        );

      case 'skills':
        return (
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-4">{category.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300"
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
          </AnimatedSection>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational background, professional experience, and technical expertise
          </p>
        </AnimatedSection>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}

export default Resume; 