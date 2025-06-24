
export interface DistroOption {
  id: string;
  name: string;
}

export interface DistroDetails {
  name: string;
  description: string;
  websiteUrl: string;
  systemRequirements: string;
  installationGuide: string[];
}

// Used for grounding chunks if Google Search is enabled
export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
  // Other types of chunks can be added here if needed
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  // Other grounding metadata fields can be added here
}

export interface Candidate {
  groundingMetadata?: GroundingMetadata;
  // Other candidate fields
}

export interface GeminiApiResponse {
  // Assuming the direct response parsing for text and structured JSON works
  // If we were to use the full response object, it would be more complex
  // For now, fetchDistroInformation handles parsing to DistroDetails
  candidates?: Candidate[]; 
  // Other fields from Gemini response can be added if needed
}
