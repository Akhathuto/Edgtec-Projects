import React from 'react';
import { FileText, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

const LicensePage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FileText className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">License Information</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Understanding your rights when using our services and content.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-6 w-6 text-indigo-600" />
                                Software License
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                            <p>Edgtec Creative AI grants you a non-exclusive, non-transferable, revocable license to use our software for your personal and commercial projects, according to your subscription plan.</p>
                            <p>You may not redistribute, resell, or reverse-engineer the software. All rights not expressly granted are reserved by Edgtec.</p>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-6 w-6 text-green-600" />
                                Content License
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                            <p>You own the content you create with Edgtec Creative AI. We grant you a worldwide, royalty-free license to use, reproduce, and display the content you generate for any purpose, including commercial use.</p>
                            <p>You are responsible for ensuring your input prompts and generated content do not infringe on any third-party rights.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LicensePage;