
import React from 'react';
import { Cookie, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const CookiesPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <Cookie className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Cookies Policy</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        How we use cookies to improve your experience.
                    </p>
                </div>

                <div className="space-y-8">
                     <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">What are Cookies?</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Cookies are small text files stored on your device that help our website function and provide us with information about how you interact with our site.
                        </p>
                    </section>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500"/> Essential Cookies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 dark:text-slate-400">These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><XCircle className="h-5 w-5 text-yellow-500"/> Non-Essential Cookies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 dark:text-slate-400">These include performance and advertising cookies. They help us understand how visitors use our site so we can improve it, and they help us serve more relevant ads. You can opt-out of these cookies.</p>
                        </CardContent>
                    </Card>
                     <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Managing Cookies</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                           You can manage your cookie preferences through the settings in your web browser. Please note that disabling essential cookies may impact your ability to use our services.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiesPage;