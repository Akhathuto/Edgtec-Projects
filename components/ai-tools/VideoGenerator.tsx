import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Video, Sparkles, Loader2 } from 'lucide-react';
import { GeneratedVideo } from '../../types';

interface Props {
  onVideoGenerated: (video: GeneratedVideo) => void;
}

const VideoGenerator: React.FC<Props> = ({ onVideoGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedVideo(null);
    // Simulate API call
    setTimeout(() => {
      // Placeholder for video data URL
      const videoSrc = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4";
      const newVideo: GeneratedVideo = {
        id: `video_${Date.now()}`,
        prompt,
        videoData: videoSrc,
        timestamp: new Date(),
      };
      setGeneratedVideo(videoSrc);
      onVideoGenerated(newVideo);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Video className="h-6 w-6 text-red-600" /> AI Video Generator</CardTitle>
        <CardDescription>Describe a scene, and let AI create a video for you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Textarea
            placeholder="e.g., A cinematic shot of a car driving on a mountain road at sunset"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px]"
            disabled={isGenerating}
        />
        <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-indigo-600 text-white hover:bg-indigo-700">
            {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Rendering...</>
            ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate Video</>
            )}
        </Button>
        
        {(isGenerating || generatedVideo) && (
            <div className="mt-6 aspect-video w-full rounded-lg bg-slate-900 flex items-center justify-center">
                {isGenerating ? (
                    <div className="text-center text-slate-500">
                       <Video className="h-10 w-10 mx-auto animate-pulse text-indigo-500" />
                       <p className="mt-2 text-sm">Rendering your video...</p>
                   </div>
                ) : generatedVideo && (
                    <video controls src={generatedVideo} className="w-full h-full rounded-lg">
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        )}
      </CardContent>
    </Card>
  );
};
export default VideoGenerator;