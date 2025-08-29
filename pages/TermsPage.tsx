
import React from 'react';
import { FileText, Users, Ban, Scale } from 'lucide-react';

const TermsPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <FileText className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="space-y-8 text-slate-700 dark:text-slate-300">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Users className="h-6 w-6 text-indigo-500" /> User Accounts</h2>
                        <p>You must be at least 13 years old to create an account. You are responsible for maintaining the security of your account and for all activities that occur under the account.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Ban className="h-6 w-6 text-red-500" /> Acceptable Use</h2>
                        <p>You agree not to use the service to create any harmful, illegal, or offensive content. We reserve the right to suspend or terminate accounts that violate our acceptable use policy.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Scale className="h-6 w-6 text-green-500" /> Intellectual Property</h2>
                        <p>You retain ownership of the content you create. By using our service, you grant us a license to store, process, and display your content to provide the service to you. We own the platform, software, and our brand.</p>
                    </section>
                     <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><FileText className="h-6 w-6 text-yellow-500" /> Disclaimers</h2>
                        <p>The service is provided "as is". We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;