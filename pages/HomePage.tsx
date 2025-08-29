import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Wand2, Sparkles, Star, Users, Palette, PenTool, ImageIcon, FileText, Music, Video, Box as Cube, Zap, ArrowRight, CheckCircle, TrendingUp, Award, Globe, Shield, Heart, Target } from 'lucide-react';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const features = [
        { icon: ImageIcon, title: "AI Image Generation", description: "Create stunning images from text descriptions.", color: "text-purple-600" },
        { icon: FileText, title: "Content Creation", description: "Generate compelling written content, stories, and marketing copy.", color: "text-blue-600" },
        { icon: Music, title: "Music Generation", description: "Compose original music tracks with AI.", color: "text-green-600" },
        { icon: Video, title: "Video Production", description: "Create professional videos from text prompts.", color: "text-red-600" },
        { icon: Cube, title: "3D Model Generation", description: "Generate detailed 3D models.", color: "text-orange-600" },
        { icon: Users, title: "Real-time Collaboration", description: "Work together with team members on projects.", color: "text-indigo-600" }
    ];

    const stats = [
        { label: "Active Users", value: "10,000+", icon: Users },
        { label: "Creations Generated", value: "1.5M+", icon: Sparkles },
        { label: "Satisfaction Rate", value: "98%", icon: Star }
    ];

    const testimonials = [
      { name: "Sarah J.", role: "Marketing Director, TechCorp", content: "Edgtec Creative AI has revolutionized our content creation process. We produce high-quality visuals and copy in minutes.", avatar: "SJ" },
      { name: "Mike C.", role: "Creative Director, Design Studio", content: "The AI image generation tools are incredible. We've expanded our creative capabilities immensely.", avatar: "MC" },
      { name: "Emma W.", role: "Freelance Content Creator", content: "As a solo creator, Edgtec is a game-changer. I can now compete with larger teams and produce professional-quality work.", avatar: "EW" }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            <Wand2 className="relative h-20 w-20 text-indigo-600" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                        Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Creativity</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
                        Transform your ideas into stunning visuals, compelling content, and immersive experiences with the power of AI. Join thousands of creators revolutionizing their workflow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => navigate("/dashboard")} className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700">
                             <Sparkles className="mr-2 h-5 w-5" />
                             Start Creating Free
                        </Button>
                        <Link to="/features">
                           <Button className="w-full sm:w-auto border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
                             <Star className="mr-2 h-5 w-5" />
                             View Features
                           </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white dark:bg-slate-900/50 py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {stats.map((stat, index) => (
                          <div key={index} className="text-center">
                              <stat.icon className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                              <div className="text-md text-slate-600 dark:text-slate-400">{stat.label}</div>
                          </div>
                      ))}
                  </div>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Powerful Creative Suite</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Everything you need to bring your visions to life with cutting-edge AI.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                           <Card key={feature.title} className="flex flex-col items-start transition-transform duration-300 hover:-translate-y-2">
                                <CardHeader>
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full flex items-center justify-center mb-4">
                                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

             {/* Testimonials Section */}
            <div className="bg-slate-100 dark:bg-slate-900/50 py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Loved by Creators Worldwide</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">{testimonial.avatar}</div>
                          <div className="ml-4">
                            <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 italic">"{testimonial.content}"</p>
                         <div className="flex mt-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                         </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl shadow-2xl p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Creative Process?</h2>
                  <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
                    Join thousands of creators who are already using AI to bring their ideas to life. Start your free trial today.
                  </p>
                  <Link to="/dashboard">
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default HomePage;