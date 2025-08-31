import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Wand2, Sparkles, Download, Loader2, AlertCircle } from 'lucide-react';
import { GeneratedImage } from '../../types';

interface Props {
  onImageGenerated: (image: GeneratedImage) => void;
}

const ImageGenerator: React.FC<Props> = ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `edgtec-ai-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedImage(null);
    setError(null);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured. Please set the API_KEY environment variable.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '1:1',
        },
      });

      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      const imageUrl = `data:image/png;base64,${base64ImageBytes}`;

      const newImage: GeneratedImage = {
        id: `img_${Date.now()}`,
        prompt,
        imageData: imageUrl,
        timestamp: new Date(),
      };
      setGeneratedImage(imageUrl);
      onImageGenerated(newImage);

    } catch (e: any) {
      console.error(e);
      setError(`Failed to generate image. ${e.message || 'Please try again.'}`);
    } finally {
      setIsGenerating(false);
    }
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
        
        {error && (
            <div className="mt-4 flex items-center gap-2 text-red-600 dark:text-red-400 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
               <AlertCircle className="h-5 w-5"/>
               <p className="text-sm">{error}</p>
            </div>
        )}
        
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
                        <Button size="sm" variant="ghost" className="bg-black/20 text-white hover:bg-black/40" onClick={handleDownload} aria-label="Download image">
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