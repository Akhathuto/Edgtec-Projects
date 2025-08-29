
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Mail className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Get in Touch</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Contact Form</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                     <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                                <Mail className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Email Us</h3>
                                <p className="text-slate-600 dark:text-slate-400">Our team will get back to you within 24 hours.</p>
                                <a href="mailto:contact@edgtec.com" className="text-indigo-600 dark:text-indigo-400 font-medium">contact@edgtec.com</a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                                <Phone className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Call Us</h3>
                                <p className="text-slate-600 dark:text-slate-400">Mon-Fri from 9am to 5pm.</p>
                                <a href="tel:+1234567890" className="text-indigo-600 dark:text-indigo-400 font-medium">+1 (234) 567-890</a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                                <MapPin className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Visit Us</h3>
                                <p className="text-slate-600 dark:text-slate-400">123 Innovation Drive, Tech City, 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;