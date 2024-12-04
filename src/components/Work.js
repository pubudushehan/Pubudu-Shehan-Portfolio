import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

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
      year: '2023',
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://your-portfolio.com',
      image: '/images/portfolio.jpg',
      highlights: [
        'Responsive design',
        'Dark mode support',
        'Smooth animations'
      ]
    },
    {
      category: 'projects',
      year: '2023',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with admin dashboard',
      technologies: ['Next.js', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce.com',
      image: '/images/ecommerce.jpg',
      highlights: [
        'Payment integration',
        'Inventory management',
        'Analytics dashboard'
      ]
    },
    // Add more projects...
  ];

  const filteredWork = selectedCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  const renderWorkCard = (item, index) => {
    return (
      <AnimatedSection animation="fade-up" delay={index * 200}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
          {/* Project Image with Overlay */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* Project Links */}
                <div className="flex space-x-3 mb-4">
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {item.year}
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {item.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-300"
                >
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <section id="work" className="py-20">
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
            <div key={index} className="relative">
              {renderWorkCard(item, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work; 