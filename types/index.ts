
export interface GeneratedImage {
  id: string;
  prompt: string;
  imageData: string; // Base64 or URL
  timestamp: Date;
}

export interface GeneratedContent {
  id: string;
  prompt: string;
  content: string;
  contentType: string;
  timestamp: Date;
}

export interface GeneratedMusic {
  id: string;
  prompt: string;
  audioData: string; // Base64 or URL
  timestamp: Date;
}

export interface GeneratedVideo {
  id: string;
  prompt: string;
  videoData: string; // Base64 or URL
  timestamp: Date;
}

export interface GeneratedModel {
  id: string;
  prompt: string;
  modelData: string; // Base64 or URL
  format: string;
  timestamp: Date;
}
