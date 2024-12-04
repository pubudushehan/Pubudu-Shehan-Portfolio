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
      degree: "Master of Science in Computer Science",
      school: "University Name",
      year: "2018 - 2020",
      description: "Specialized in Machine Learning and Artificial Intelligence. Graduated with distinction.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University Name",
      year: "2014 - 2018",
      description: "First Class Honours. President of the Computing Society.",
    }
  ];

  const experience = [
    {
      position: "Senior Software Engineer",
      company: "Tech Company Name",
      year: "2020 - Present",
      responsibilities: [
        "Led development of enterprise-scale web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and improved deployment processes",
        "Reduced application load time by 40% through optimization"
      ]
    },
    {
      position: "Software Developer",
      company: "Another Company",
      year: "2018 - 2020",
      responsibilities: [
        "Developed and maintained multiple client-facing applications",
        "Collaborated with UX team to implement responsive designs",
        "Integrated third-party APIs and services",
        "Participated in agile development processes"
      ]
    }
  ];

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

  const aboutMe = {
    description: "I am a passionate software developer with over 5 years of experience in creating innovative digital solutions. My journey in technology has been driven by a constant desire to learn and create meaningful impact through code.",
    highlights: [
      "Full-stack developer specializing in modern web technologies",
      "Experienced in building scalable applications and microservices",
      "Passionate about teaching and mentoring junior developers",
      "Committed to writing clean, maintainable, and efficient code"
    ],
    interests: ["Open Source", "AI/ML", "Teaching", "Tech Writing"]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <AnimatedSection className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {aboutMe.description}
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Highlights</h4>
                <ul className="space-y-2">
                  {aboutMe.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.interests.map((interest, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        );

      case 'education':
        return (
          <AnimatedSection className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{edu.year}</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                <div className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.description}</p>
              </div>
            ))}
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