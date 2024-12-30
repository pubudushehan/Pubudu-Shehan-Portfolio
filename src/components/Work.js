import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import portfolioImage from '../assets/Portfolio.jpg';
import QuizImage from '../assets/Test Genius.png';
import electroCombatImage from '../assets/Electro_Combat.jpg';
import techCommitteeImage from '../assets/Headshot.jpg';

function Work() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const workItems = [
    {
      category: 'projects',
      year: '2024',
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://your-portfolio.com',
      image: portfolioImage,
      highlights: [
        'Responsive design',
        'Dark mode support',
        'Smooth animations'
      ]
    },
    {
      category: 'projects',
      year: '2024',
      title: 'Test Genius Quiz Web Site',
      description: 'Full-stack Quiz app for A/L Students',
      technologies: ['React', 'Tailwind CSS', 'Next.js', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce.com',
      image: QuizImage,
      highlights: [
        'Real time Quiz',
        'Progress Tracker',
        'Responsive Design'
      ]
    },
    {
      category: 'volunteer',
      year: '2024',
      title: 'Secretary of Technology Sub-Committee',
      description: 'Leading technology initiatives and organizing tech-related events for the university community.',
      technologies: ['Event Management', 'Technical Leadership', 'Team Coordination'],
      image: techCommitteeImage,
      highlights: [
        'Organizing technical workshops and seminars',
        'Managing technical resources and documentation',
        'Coordinate the Headshot Gaming Competition 2024',
        'Planning and executing technology-driven events'
      ]
    },
    {
      category: 'volunteer',
      year: '2024',
      title: 'Referee at Electro Combat 2024',
      description: 'Served as a referee in the Electro Combat 2024 competition at the University of Sri Jayawardenapura.',
      technologies: ['Event Management', 'Competition Rules', 'Fair Play'],
      image: electroCombatImage,
      highlights: [
        'Ensuring fair play and competition rules',
        'Evaluating participant performances',
        'Maintaining competition standards',
        'Contributing to event organization'
      ]
    }
  ];

  const filteredWork = selectedCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  const renderWorkCard = (item, index) => {
    return (
      <AnimatedSection animation="fade-up" delay={index * 200}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 h-[600px] flex flex-col">
          {/* Project Image with Overlay */}
          <div className="relative h-48 flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title and Year Badge */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
                {item.title}
              </h3>
              <span className="flex-shrink-0 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full whitespace-nowrap">
                {item.year}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-auto space-y-3">
              {item.highlights.map((highlight, highlightIndex) => (
                <div 
                  key={highlightIndex}
                  className="flex items-start space-x-3 group/item"
                >
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg 
                      className="w-3 h-3 text-blue-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover/item:text-blue-500 transition-colors duration-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my projects and achievements
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((item, index) => (
            <div key={index} className="relative h-full">
              {renderWorkCard(item, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work; 