
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Wand2, Sparkles, Download, Loader2 } from 'lucide-react';
import { GeneratedImage } from '../../types';

interface Props {
  onImageGenerated: (image: GeneratedImage) => void;
}

const ImageGenerator: React.FC<Props> = ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedImage(null);
    // Simulate API call
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: `img_${Date.now()}`,
        prompt,
        imageData: `https://picsum.photos/seed/${prompt}/512`,
        timestamp: new Date(),
      };
      setGeneratedImage(newImage.imageData);
      onImageGenerated(newImage);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Wand2 className="h-6 w-6 text-purple-600" /> AI Image Generator</CardTitle>
        <CardDescription>Describe what you want to create, and let AI bring it to life.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
            <label htmlFor="prompt-image" className="font-medium text-slate-700 dark:text-slate-300">Your Prompt</label>
            <Textarea
                id="prompt-image"
                placeholder="e.g., A majestic lion wearing a crown, digital art style"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
                disabled={isGenerating}
            />
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-2">
                <Badge variant="secondary">1024x1024</Badge>
                <Badge variant="outline">PNG</Badge>
            </div>
            <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-indigo-600 text-white hover:bg-indigo-700">
                {isGenerating ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                ) : (
                    <><Sparkles className="mr-2 h-4 w-4" /> Generate Image</>
                )}
            </Button>
        </div>
        
        {(isGenerating || generatedImage) && (
            <div className="mt-6 aspect-square w-full rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                {isGenerating ? (
                   <div className="text-center text-slate-500">
                       <Sparkles className="h-10 w-10 mx-auto animate-pulse text-indigo-500" />
                       <p className="mt-2 text-sm">Generating your masterpiece...</p>
                   </div>
                ) : generatedImage && (
                   <>
                    <img src={generatedImage} alt={prompt} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2">
                        <Button size="sm" variant="ghost" className="bg-white/50 hover:bg-white/80">
                            <Download className="h-4 w-4" />
                        </Button>
                    </div>
                   </>
                )}
            </div>
        )}

      </CardContent>
    </Card>
  );
};
export default ImageGenerator;
