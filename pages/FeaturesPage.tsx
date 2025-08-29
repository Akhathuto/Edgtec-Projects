
import React from 'react';
import { ImageIcon, FileText, Music, Video, Box as Cube, Users } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    { icon: ImageIcon, title: "AI Image Generation", description: "Create stunning images from text descriptions using advanced AI models.", color: "text-purple-600" },
    { icon: FileText, title: "Content Creation", description: "Generate compelling written content, stories, and marketing copy.", color: "text-blue-600" },
    { icon: Music, title: "Music Generation", description: "Compose original music tracks with AI-powered composition tools.", color: "text-green-600" },
    { icon: Video, title: "Video Production", description: "Create professional videos from text prompts and AI editing.", color: "text-red-600" },
    { icon: Cube, title: "3D Model Generation", description: "Generate detailed 3D models for games, animations, and printing.", color: "text-orange-600" },
    { icon: Users, title: "Real-time Collaboration", description: "Work together with team members on creative projects in real-time.", color: "text-indigo-600" }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Features</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore the powerful tools that make Edgtec Creative AI the ultimate creative suite.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mx-auto mb-6">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-slate-800 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
