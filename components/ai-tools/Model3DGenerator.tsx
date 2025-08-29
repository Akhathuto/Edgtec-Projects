
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Box as Cube, Sparkles, Loader2 } from 'lucide-react';
import { GeneratedModel } from '../../types';

interface Props {
  onModelGenerated: (model: GeneratedModel) => void;
}

const Model3DGenerator: React.FC<Props> = ({ onModelGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedModel, setGeneratedModel] = useState<boolean>(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedModel(false);
    // Simulate API call
    setTimeout(() => {
      const newModel: GeneratedModel = {
        id: `model_${Date.now()}`,
        prompt,
        modelData: "placeholder_3d_data",
        format: 'obj',
        timestamp: new Date(),
      };
      setGeneratedModel(true);
      onModelGenerated(newModel);
      setIsGenerating(false);
    }, 3500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Cube className="h-6 w-6 text-orange-600" /> 3D Model Generator</CardTitle>
        <CardDescription>Describe an object, and let AI build a 3D model.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <textarea
            placeholder="e.g., A low-poly model of a treasure chest"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full min-h-[100px] p-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800"
            disabled={isGenerating}
        />
        <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-indigo-600 text-white hover:bg-indigo-700">
            {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
            ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate Model</>
            )}
        </Button>
        
        {(isGenerating || generatedModel) && (
            <div className="mt-6 aspect-square w-full rounded-lg bg-slate-900 flex items-center justify-center">
                 <div className="text-center text-slate-500">
                    <Cube className={`h-16 w-16 mx-auto text-indigo-500 ${isGenerating ? 'animate-pulse' : ''}`} />
                    <p className="mt-2 text-sm">{isGenerating ? 'Generating your 3D model...' : '3D Preview Placeholder'}</p>
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
};
export default Model3DGenerator;
