import React from 'react';
import { Link } from "react-router-dom";
import { Wand2, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: "GitHub", href: "#", icon: Github },
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "LinkedIn", href: "#", icon: Linkedin },
    ];

    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "/features" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Support", href: "/support" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Press", href: "/press" },
                { name: "Contact", href: "/contact" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "/docs" },
                { name: "API Status", href: "/health" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "License", href: "/license" },
                { name: "Cookies", href: "/cookies" },
            ]
        }
    ];

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Wand2 className="h-8 w-8 text-indigo-600" />
                            <span className="font-bold text-2xl text-slate-800 dark:text-white">Edgtec Creative AI</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                            Unleash your creativity with the power of artificial intelligence.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a key={social.name} href={social.href} className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                                    <span className="sr-only">{social.name}</span>
                                    <social.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} Edgtec Creative AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;