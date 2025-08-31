import React, { useState } from 'react';
import { Palette, PenTool, ImageIcon, Music, Video, Users, FolderOpen, Wand2, Box as Cube } from 'lucide-react';
import ImageGenerator from '../components/ai-tools/ImageGenerator';
import ContentWriter from '../components/ai-tools/ContentWriter';
import MusicGenerator from '../components/ai-tools/MusicGenerator';
import VideoGenerator from '../components/ai-tools/VideoGenerator';
import Model3DGenerator from '../components/ai-tools/Model3DGenerator';
import Collaboration from '../components/ai-tools/Collaboration';
import CreativeGallery from '../components/ai-tools/CreativeGallery';
import { GeneratedImage, GeneratedContent, GeneratedMusic, GeneratedVideo, GeneratedModel } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('image');
    
    // State for generated content
    const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
    const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
    const [generatedMusic, setGeneratedMusic] = useState<GeneratedMusic[]>([]);
    const [generatedVideos, setGeneratedVideos] = useState<GeneratedVideo[]>([]);
    const [generatedModels, setGeneratedModels] = useState<GeneratedModel[]>([]);

    const tabs = [
        { id: 'image', label: 'Images', icon: ImageIcon },
        { id: 'text', label: 'Text', icon: PenTool },
        { id: 'music', label: 'Music', icon: Music },
        { id: 'video', label: 'Video', icon: Video },
        { id: '3d', label: '3D', icon: Cube },
        { id: 'collaborate', label: 'Collaborate', icon: Users },
        { id: 'gallery', label: 'Gallery', icon: FolderOpen },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'image':
                return <ImageGenerator onImageGenerated={(img) => setGeneratedImages(prev => [img, ...prev])} />;
            case 'text':
                return <ContentWriter onContentGenerated={(c) => setGeneratedContent(prev => [c, ...prev])} />;
            case 'music':
                 return <MusicGenerator onMusicGenerated={(m) => setGeneratedMusic(prev => [m, ...prev])} />;
            case 'video':
                 return <VideoGenerator onVideoGenerated={(v) => setGeneratedVideos(prev => [v, ...prev])} />;
            case '3d':
                 return <Model3DGenerator onModelGenerated={(m) => setGeneratedModels(prev => [m, ...prev])} />;
            case 'collaborate':
                return <Collaboration />;
            case 'gallery':
                return <CreativeGallery images={generatedImages} content={generatedContent} music={generatedMusic} videos={generatedVideos} models={generatedModels} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center space-x-3 mb-8">
                <Wand2 className="h-8 w-8 text-indigo-600" />
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Creative Dashboard</h1>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-700">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${
                                activeTab === tab.id
                                    ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                        >
                           <tab.icon className="h-5 w-5"/>
                           <span>{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="mt-8">
                {renderContent()}
            </div>
        </div>
    );
};

export default DashboardPage;