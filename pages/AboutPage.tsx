import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, Globe, Heart, Lightbulb, Target, Users, Wand2, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Wand2 className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">About Edgtec Creative AI</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        We are a passionate team of developers, designers, and AI researchers dedicated to empowering creativity through technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                         <img src="https://picsum.photos/800/600" alt="Team working" className="rounded-lg shadow-2xl"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Our Mission</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                            Our mission is to democratize creativity by making powerful AI tools accessible to everyone. We believe that technology should be a partner in the creative process, amplifying human imagination, not replacing it.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            We are building a future where anyone, regardless of technical skill, can bring their ideas to life in stunning detail.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg py-16 mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Our Story & Commitment</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                           Founded in South Africa, EDGTEC is a proud 100% black youth-owned enterprise. We are driven by a passion for innovation and a commitment to creating opportunities within our community.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                           Our goal is not only to build cutting-edge technology but also to foster empowerment, proving that great ideas can come from anywhere and anyone.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Lightbulb, title: "Innovation", text: "We constantly push the boundaries of AI to deliver cutting-edge creative tools." },
                        { icon: Users, title: "Community", text: "We foster a collaborative environment for creators to learn and grow together." },
                        { icon: Heart, title: "User-Focused", text: "Our users are at the heart of everything we build. Your success is our success." },
                        { icon: Globe, title: "Accessibility", text: "We believe powerful tools should be available to all, designing for inclusivity." }
                    ].map(value => (
                         <div key={value.title} className="text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mx-auto mb-4">
                                <value.icon className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{value.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{value.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;