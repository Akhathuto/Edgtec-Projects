import React from 'react';
import { Newspaper, Download, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';

const PressPage: React.FC = () => {
    const pressReleases = [
        { date: "Oct 26, 2023", title: "Edgtec Creative AI Launches Revolutionary 3D Model Generation Tool", excerpt: "Our new tool allows creators to generate complex 3D models from simple text prompts, revolutionizing the 3D asset pipeline." },
        { date: "Sep 15, 2023", title: "Edgtec Secures $20M in Series A Funding", excerpt: "The new funding will accelerate our research in generative AI and expand our team of world-class engineers and designers." },
    ];
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Newspaper className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Press Center</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Resources for journalists, bloggers, and media professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Latest News</h2>
                        <div className="space-y-8">
                            {pressReleases.map(release => (
                                <div key={release.title}>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{release.date}</p>
                                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{release.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300">{release.excerpt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Media Assets</CardTitle>
                                <CardDescription>Download our official brand assets.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-900">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Press Kit (.zip)
                                </Button>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                                <CardDescription>For all media inquiries.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a href="mailto:press@edgtec.com" className="flex items-center text-indigo-600 dark:text-indigo-400">
                                  <Mail className="mr-2 h-4 w-4" /> press@edgtec.com
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressPage;