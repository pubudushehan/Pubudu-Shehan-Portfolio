import React from 'react';
import AnimatedSection from './AnimatedSection';

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern frameworks and technologies.",
      icon: (
        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-violet-600/20 to-indigo-600/20"
    },
    {
      title: "Machine Learning",
      description: "Developing intelligent solutions using ML algorithms and deep learning for data-driven applications.",
      icon: (
        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-violet-600/20 to-fuchsia-600/20"
    },
    {
      title: "Software Development",
      description: "Building efficient and scalable software solutions for various platforms and needs.",
      icon: (
        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-violet-600/20 to-fuchsia-600/20"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces with focus on user experience.",
      icon: (
        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: "from-fuchsia-600/20 to-pink-600/20"
    },
    {
      title: "Teaching & Training",
      description: "Sharing knowledge and expertise in programming, web technologies, and ICT.",
      icon: (
        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-pink-600/20 to-rose-600/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-violet-600 dark:text-violet-400 font-medium mb-4 block">What I Offer</span>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Delivering cutting-edge solutions across multiple domains with expertise and innovation
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 200} animation="fade-up">
              <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 