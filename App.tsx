import React, { useState } from 'react';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min- bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">My Website</h1>
                    <button onClick={toggleDarkMode} className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-full transition-colors duration-300">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </header>
            <main>
                <section className="hero bg-gray-100 dark:bg-gray-800 py-20">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
                        <p className="text-xl mb-8">This is a simple, modern website built with React, TypeScript, and TailwindCSS.</p>
                        <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors duration-300">
                            Learn More
                        </a>
                    </div>
                </section>
                <section id="about" className="py-20 bg-gray-50 dark:bg-gray-700">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-lg">To create beautiful, functional websites that enhance user experience.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-lg">To be a leading provider of modern web solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <svg className="w-12 h-12 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.74"></path>
                                </svg>
                                <h3 className="text-xl font-bold mb-4">Web Design</h3>
                                <p className="text-lg">Create stunning, user-friendly designs that convert visitors into customers.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <svg className="w-12 h-12 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="12" y1="18" x2="12" y2="22"></line>
                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                    <line x1="12" y1="12" x2="12" y2="15"></line>
    </svg>
                                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                                <p className="text-lg">Build robust, scalable web applications using the latest technologies.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <svg className="w-12 h-12 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <rect x="8" y="2" width="8" height="4"></rect>
                                    <rect x="8" y="18" width="8" height="4"></rect>
                                    <rect x="16" y="11" width="8" height="2"></rect>
                                </svg>
                                <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
                                <p className="text-lg">Improve your website's visibility and drive more organic traffic.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gray-50 dark:bg-gray-700">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <p className="text-lg mb-4">"Their web design services exceeded my expectations. The team was professional and delivered a beautiful, user-friendly website."</p>
                                <p className="text-gray-600 dark:text-gray-400">- John Doe, CEO of XYZ Corp</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <p className="text-lg mb-4">"The development team was incredibly responsive and helped us launch our new web application on time and within budget."</p>
                                <p className="text-gray-600 dark:text-gray-400">- Jane Smith, CTO of ABC Inc</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto text-center px-4">
                    <p className="mb-2">© 2023 My Website. All rights reserved.</p>
                    <p className="text-sm">Built with ❤️ using React, TypeScript, and TailwindCSS</p>
                </div>
            </footer>
        </div>
    );
};

export default App;