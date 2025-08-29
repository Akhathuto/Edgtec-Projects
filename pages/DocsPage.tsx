
import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

const DocsPage: React.FC = () => {
    const categories = [
        { name: 'Getting Started', articles: ['Creating an Account', 'Your First Generation'] },
        { name: 'AI Tools', articles: ['Image Generation Guide', 'Prompting Best Practices'] },
        { name: 'API Reference', articles: ['Authentication', 'Image Endpoint'] },
    ];

    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16">
                    <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Documentation</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        Your guide to mastering Edgtec Creative AI.
                    </p>
                </div>
                
                 <div className="relative mb-12 max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input type="text" placeholder="Search documentation..." className="w-full pl-12 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                 </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map(category => (
                        <Card key={category.name}>
                            <CardHeader>
                                <CardTitle>{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {category.articles.map(article => (
                                        <li key={article}>
                                            <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">{article}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DocsPage;