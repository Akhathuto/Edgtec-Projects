
import React from 'react';
import { Shield, Eye, Database, Lock, Share2, Cookie } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

const PrivacyPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Eye className="h-6 w-6 text-indigo-500" /> Information We Collect</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
                           <p>We collect information you provide directly to us, such as when you create an account (name, email). We also collect information automatically as you use our services, such as your prompts, generated content, and usage data.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Database className="h-6 w-6 text-green-500" /> How We Use Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
                           <p>We use the information we collect to provide, maintain, and improve our services, including training our AI models to be more helpful and safe. We also use it to communicate with you and personalize your experience.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Share2 className="h-6 w-6 text-blue-500" /> Information Sharing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
                           <p>We do not sell your personal information. We may share information with third-party service providers for tasks such as data storage and processing, but they are obligated to protect your data.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Lock className="h-6 w-6 text-red-500" /> Data Security</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
                           <p>We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access. We use encryption and other security best practices.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
