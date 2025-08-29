
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { PenTool, Sparkles, Loader2, Copy } from 'lucide-react';
import { GeneratedContent } from '../../types';

interface Props {
  onContentGenerated: (content: GeneratedContent) => void;
}

const ContentWriter: React.FC<Props> = ({ onContentGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedText(null);
    // Simulate API call
    setTimeout(() => {
        const text = `Based on your prompt "${prompt}", here is some AI-generated content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.`;
        const newContent: GeneratedContent = {
            id: `content_${Date.now()}`,
            prompt,
            content: text,
            contentType: 'General',
            timestamp: new Date(),
        };
        setGeneratedText(text);
        onContentGenerated(newContent);
        setIsGenerating(false);
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><PenTool className="h-6 w-6 text-blue-600" /> AI Content Writer</CardTitle>
        <CardDescription>Describe a topic, and let the AI write for you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
            <label htmlFor="prompt-text" className="font-medium text-slate-700 dark:text-slate-300">Topic or Prompt</label>
            <Textarea
                id="prompt-text"
                placeholder="e.g., Write a blog post about the benefits of remote work..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
                disabled={isGenerating}
            />
        </div>
        <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-indigo-600 text-white hover:bg-indigo-700">
            {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Writing...</>
            ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate Text</>
            )}
        </Button>
        
         {(isGenerating || generatedText) && (
            <Card className="mt-6 bg-slate-50 dark:bg-slate-800">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Generated Content</CardTitle>
                    {generatedText && <Button variant="ghost" size="sm"><Copy className="h-4 w-4 mr-2"/> Copy</Button>}
                </CardHeader>
                <CardContent>
                    {isGenerating ? (
                        <div className="space-y-2">
                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full animate-pulse"></div>
                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 animate-pulse"></div>
                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full animate-pulse"></div>
                        </div>
                    ) : (
                        <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{generatedText}</p>
                    )}
                </CardContent>
            </Card>
        )}
      </CardContent>
    </Card>
  );
};
export default ContentWriter;
