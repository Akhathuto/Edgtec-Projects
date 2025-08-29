import React from 'react';
import { Link } from "react-router-dom";
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">404 - Page Not Found</h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Sorry, the page you are looking for does not exist.
                </p>
                <div className="mt-8">
                    <Link to="/">
                         <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md text-base font-semibold transition-colors">
                            Go back home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;