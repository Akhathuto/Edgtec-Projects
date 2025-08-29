
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Music, Sparkles, Loader2, Play, Pause } from 'lucide-react';
import { GeneratedMusic } from '../../types';

interface Props {
  onMusicGenerated: (music: GeneratedMusic) => void;
}

const MusicGenerator: React.FC<Props> = ({ onMusicGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedAudio(null);
    // Simulate API call
    setTimeout(() => {
      // Placeholder for audio data URL
      const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
      const newMusic: GeneratedMusic = {
        id: `music_${Date.now()}`,
        prompt,
        audioData: audioSrc,
        timestamp: new Date(),
      };
      setGeneratedAudio(audioSrc);
      onMusicGenerated(newMusic);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Music className="h-6 w-6 text-green-600" /> AI Music Generator</CardTitle>
        <CardDescription>Describe a mood or style, and let AI compose for you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <textarea
            placeholder="e.g., Lofi hip hop beat for studying"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full min-h-[100px] p-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800"
            disabled={isGenerating}
        />
        <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-indigo-600 text-white hover:bg-indigo-700">
            {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Composing...</>
            ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate Music</>
            )}
        </Button>

        {(isGenerating || generatedAudio) && (
            <div className="mt-6 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {isGenerating ? (
                     <div className="text-center text-slate-500">
                       <Music className="h-10 w-10 mx-auto animate-pulse text-indigo-500" />
                       <p className="mt-2 text-sm">Composing your track...</p>
                   </div>
                ) : generatedAudio && (
                    <audio controls src={generatedAudio} className="w-full">
                        Your browser does not support the audio element.
                    </audio>
                )}
            </div>
        )}
      </CardContent>
    </Card>
  );
};
export default MusicGenerator;
