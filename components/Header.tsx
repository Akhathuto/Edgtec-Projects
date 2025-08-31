import React, { useState, useEffect } from 'react';
// Fix: Updated react-router-dom imports for v6 compatibility.
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Wand2, Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);
        if (newIsDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="flex items-center space-x-2">
                        <Wand2 className="h-7 w-7 text-indigo-600" />
                        <span className="font-bold text-xl text-slate-800 dark:text-white">Edgtec Creative AI</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        // Fix: Replaced activeClassName with className function for react-router-dom v6.
                        <NavLink
                            key={item.name}
                            to={item.href}
                            end={item.href === '/'}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors ${isActive
                                    ? 'text-indigo-600 dark:text-indigo-400'
                                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center space-x-2">
                     <button
                        onClick={toggleTheme}
                        aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
                        className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                    </button>

                     <Link to="/dashboard">
                        <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                            Dashboard
                        </button>
                    </Link>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <nav className="container py-4 space-y-2 px-4 sm:px-6 lg:px-8">
                        {navigation.map((item) => (
                            // Fix: Replaced activeClassName with className function for mobile menu as well for v6 compatibility.
                            <NavLink
                                key={item.name}
                                to={item.href}
                                end={item.href === '/'}
                                className={({ isActive }) =>
                                    `block px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive
                                        ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-800'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;