
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { GeneratedImage, GeneratedContent, GeneratedMusic, GeneratedVideo, GeneratedModel } from '../../types';
import { ImageIcon, FileText, Music, Video, Box as Cube, FolderOpen } from 'lucide-react';

interface Props {
    images: GeneratedImage[];
    content: GeneratedContent[];
    music: GeneratedMusic[];
    videos: GeneratedVideo[];
    models: GeneratedModel[];
}

const CreativeGallery: React.FC<Props> = ({ images, content, music, videos, models }) => {
    const allItems = [
        ...images.map(item => ({ ...item, type: 'Image' })),
        ...content.map(item => ({ ...item, type: 'Text' })),
        ...music.map(item => ({ ...item, type: 'Music' })),
        ...videos.map(item => ({ ...item, type: 'Video' })),
        ...models.map(item => ({ ...item, type: '3D Model' })),
    ].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    const getIcon = (type: string) => {
        switch (type) {
            case 'Image': return <ImageIcon className="h-8 w-8 text-purple-500" />;
            case 'Text': return <FileText className="h-8 w-8 text-blue-500" />;
            case 'Music': return <Music className="h-8 w-8 text-green-500" />;
            case 'Video': return <Video className="h-8 w-8 text-red-500" />;
            case '3D Model': return <Cube className="h-8 w-8 text-orange-500" />;
            default: return null;
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="h-6 w-6 text-indigo-600" />
                    Creative Gallery
                </CardTitle>
                <CardDescription>All your generated assets in one place, sorted by most recent.</CardDescription>
            </CardHeader>
            <CardContent>
                {allItems.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 dark:text-slate-400">
                        <p>Your generated creations will appear here.</p>
                        <p>Start creating using the tools!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allItems.map(item => (
                            <Card key={item.id} className="overflow-hidden">
                                <div className="aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    {item.type === 'Image' && <img src={(item as GeneratedImage).imageData} className="w-full h-full object-cover" alt={item.prompt} />}
                                    {item.type !== 'Image' && getIcon(item.type)}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-sm truncate text-slate-800 dark:text-white">{item.type}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate" title={item.prompt}>
                                        Prompt: {item.prompt}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default CreativeGallery;
