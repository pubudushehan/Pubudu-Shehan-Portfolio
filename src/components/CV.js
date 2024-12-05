import React from 'react';

function CV() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Personal Information */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pubudu Shehan</h1>
        <p className="text-lg">Web & Software Developer | UI/UX Designer</p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full">React</span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full">Tailwind CSS</span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full">JavaScript</span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full">Node.js</span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full">MongoDB</span>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div>
          <h3 className="text-xl font-bold">Test Genius Quiz Web Site</h3>
          <p className="text-sm text-blue-600 dark:text-blue-400">2024</p>
          <p>Full-stack Quiz app for A/L Students</p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-bold">Your University</h3>
          <p className="text-sm text-blue-600 dark:text-blue-400">Degree in Computer Science</p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div>
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p>Modern portfolio website built with React and Tailwind CSS</p>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: pubudushehankarunarathna@gmail.com</p>
      </section>
    </div>
  );
}

export default CV; 