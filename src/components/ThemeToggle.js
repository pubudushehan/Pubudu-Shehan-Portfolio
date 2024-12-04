import React from 'react';

function ThemeToggle({ isDark, toggle }) {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle Theme"
    >
      {/* Sun icon */}
      <svg
        className={`w-6 h-6 transition-all duration-500 ${
          isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        } absolute top-3 left-3 text-gray-800 dark:text-yellow-300`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
        />
      </svg>

      {/* Moon icon */}
      <svg
        className={`w-6 h-6 transition-all duration-500 ${
          isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        } absolute top-3 left-3 text-gray-800`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}

export default ThemeToggle; 