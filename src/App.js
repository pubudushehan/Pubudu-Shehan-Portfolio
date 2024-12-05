import { useState, useEffect } from 'react';
import CVModal from './components/CVModal';
import ThemeToggle from './components/ThemeToggle';
import Services from './components/Services';
import AnimatedSection from './components/AnimatedSection';
import profileImage from '../src/assets/Profile1.jpg.png';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import CV from './components/CV';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check if user has a theme preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Update document class when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'resume', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkClasses = (section) => {
    const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105";
    const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20";
    const activeClasses = "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20";
    
    return `${baseClasses} ${activeSection === section ? activeClasses : inactiveClasses}`;
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200/30 dark:border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500/5 before:via-transparent before:to-indigo-500/5 before:rounded-xl before:opacity-40 before:-z-10">
            <a 
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text hover:from-violet-700 hover:to-indigo-700 dark:hover:from-violet-300 dark:hover:to-indigo-300 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Pubudu Shehan
            </a>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className={getNavLinkClasses('home')}>Home</a>
              <a href="#services" className={getNavLinkClasses('services')}>Services</a>
              <a href="#resume" className={getNavLinkClasses('resume')}>Resume</a>
              <a href="#work" className={getNavLinkClasses('work')}>Work</a>
              <a href="#contact" className={getNavLinkClasses('contact')}>Contact</a>
              <a href="#contact" className="ml-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] dark:hover:shadow-[0_8px_30px_rgb(124,58,237,0.24)] relative before:absolute before:inset-0 before:bg-white/10 before:rounded-lg before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                Hire Me
              </a>
            </div>
            <button className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <AnimatedSection delay={200} animation="fade-right">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                    Hi, I'm Pubudu Shehan
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                    Web & Software Developer | UI/UX Designer
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Passionate about creating innovative digital solutions and sharing knowledge 
                    through teaching. Specialized in modern web technologies and software development.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 gap-4 py-4">
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300">Colombo, Sri Lanka</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">pubudushehankarunarathna@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">+94 789988379</p>
                  </div>
                </div>

                {/* Buttons and Social Links */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setIsCVModalOpen(true)}
                    className="bg-violet-600 text-white px-6 py-2.5 rounded-full hover:bg-violet-700 transition flex items-center"
                  >
                    View CV
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <div className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/pubudu-shehan-37a2132a6/" target="_blank" rel="noopener noreferrer" 
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/pubudushehan" target="_blank" rel="noopener noreferrer" 
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <a href="https://vercel.com/pubudu-shehans-projects" target="_blank" rel="noopener noreferrer" 
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 22.525H0l12-21.05 12 21.05z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" 
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Image */}
            <AnimatedSection delay={400} animation="fade-left">
              <div className="relative w-[350px] h-[450px] mx-auto">
                {/* Decorative elements */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2rem] blur opacity-30 animate-pulse group-hover:opacity-40 transition duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main image container */}
                <div className="relative bg-white dark:bg-gray-800 rounded-[2rem] p-2 shadow-2xl group h-full">
                  <div className="overflow-hidden rounded-[1.7rem] h-full">
                    <img 
                      src={profileImage} 
                      alt="Pubudu Shehan" 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-xl opacity-20 animate-pulse delay-100"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Skills Preview */}
          <div className="mt-12 py-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 dark:text-white">Web Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">React, Node.js, Next.js</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 dark:text-white">Software Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Python, Java, C++</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 dark:text-white">Teaching</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ICT, Programming</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 dark:text-white">Database</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">MySQL, MongoDB, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>

      {/* Resume Section */}
      <Resume />

      {/* Work Section */}
      <Work />

      {/* Contact Section */}
      <Contact />

      {/* CV Modal */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />

      {/* Add ThemeToggle component */}
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />

      {/* CV Component */}
      {isCVModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <button onClick={() => setIsCVModalOpen(false)} className="text-red-500">Close</button>
            <CV />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
