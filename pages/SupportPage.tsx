
import React from 'react';
import { Headphones, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const SupportPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <Headphones className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Support Center</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        We're here to help. Find answers to your questions below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                     <Card className="text-center">
                        <CardHeader>
                           <Mail className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                           <CardTitle>Email Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 dark:text-slate-400 mb-3">Get in touch with our team for any questions.</p>
                           <a href="mailto:support@edgtec.com" className="font-semibold text-indigo-600 hover:underline">support@edgtec.com</a>
                        </CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                           <MessageSquare className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                           <CardTitle>Live Chat</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 dark:text-slate-400 mb-3">Chat with us live for immediate assistance.</p>
                           <button className="font-semibold text-indigo-600 hover:underline">Start Chat</button>
                        </CardContent>
                    </Card>
                </div>

                 <div>
                    <h2 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader><CardTitle className="text-lg">What is the free tier limit?</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-600 dark:text-slate-400">Our free tier includes 20 free image generations and 5,000 words of text generation per month.</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader><CardTitle className="text-lg">Can I use the generated assets commercially?</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-600 dark:text-slate-400">Yes, on any of our paid plans, you have full commercial rights to the content you generate.</p></CardContent>
                        </Card>
                    </div>
                 </div>

            </div>
        </div>
    );
};

export default SupportPage;